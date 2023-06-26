import React, { Component, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Avatar from "@mui/material/Avatar";

import AssetCreate from "../components/AssetCreate";
import { AuthContext } from "../components/context/authContext";
import ProfileInfo from "../components/ProfileInfo";

import { stringAvatar } from "../utils";
import {RouteByToken} from "./login";
import {User} from "../components/hooks/useUser";
import {Credential} from "./learner-dashboard";

const useAuthGuard = () => {
  const router = useRouter();
  const { user, setUser } = useContext(AuthContext);
  useEffect(() => {
    async function getUser() {
      const token = localStorage.getItem("AccessToken");
      console.log("token", token);
      if (token) {
        await RouteByToken(token, router, setUser);
      } else {
        router.push("/login");
      }
    }
    if (!user) {
      // check if access token is in local storage
      getUser();
    }
    if (user?.role && user.role === "LEARNER") router.push("/learner-dashboard");
  }, []);

  return [user];
};

const useIssuerCredentials = (user: User | null) => {
  const [credentials, setCredentials] = useState<Credential[]>([]);

  useEffect(() => {
    if (user && user.authToken) {
      fetchAssets();
    }
  }, [user]);

  const fetchAssets = async () => {
    const res = await fetch("api/credentials", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("AccessToken"),
        "Content-Type": "application/json",
      },
    });

    if (res.status === 200) {
      const data = await res.json();
      setCredentials(data);
      console.log('data',data)
    } else {
      alert("Failed fetching user credentials.");
    }
  };

  return [credentials];
};

const IssuerDashboard = () => {
  const [value, setValue] = useState("1");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const router = useRouter();
  const [user] = useAuthGuard();
  const [credentials] = useIssuerCredentials(user);

  const handleLogout = () => {
    localStorage.removeItem("AccessToken");
    router.push("/");
  };
  // console.log(user);

  return (
    <div className="user-dashboard-wrap">
      <div className="dashboard-sidebar">
        <div className="dashboard-logo">
          <a className="navbar-brand">
            <img src="/logo/logo-color.png" width={150} alt="logo" />
          </a>
        </div>
        <div className="personal-info">
          <div className="avatar">
            <Avatar
              {...stringAvatar(user?.firstname + " " + user?.lastname)}
              sx={{ width: 100, height: 100 }}
            />
          </div>
          <h3 className="name-display">
            {user?.firstname + " " + user?.lastname}
          </h3>
        </div>
        <div className="footer">
          <div className="footer-item-container">
            <button type="button" className="btn" onClick={handleLogout}>
              <i className="bi bi-box-arrow-right fa-4x"></i> &nbsp;Log out
            </button>
          </div>
        </div>
      </div>
      <div className="dashboard-right">
        <div className="dashboard-right-wrap">
          <div className="col-lg-6">
            <div className="dashboard-title">
              <span>My Dashboard</span>
            </div>
          </div>
          <div className="dashboard-header-wrap">
            <div className="dashboard-content">
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <TabList
                    onChange={handleChange}
                    TabIndicatorProps={{
                      style: {
                        backgroundColor: "#04063c",
                      },
                    }}>
                    <Tab label="Issued credentials" value="1" />
                    <Tab label="My account" value="2" />
                  </TabList>
                </Box>
                <TabPanel value="1">
                  <AssetCreate credentials={credentials}/>
                </TabPanel>

                <TabPanel value="2">
                  <ProfileInfo />
                </TabPanel>
              </TabContext>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssuerDashboard;
