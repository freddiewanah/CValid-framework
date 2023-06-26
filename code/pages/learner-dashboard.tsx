import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { Avatar } from "@mui/material";
import Button from '@mui/material/Button';
import { AuthContext } from "../components/context/authContext";
import { User } from "../components/hooks/useUser";
import {RouteByToken} from "./login";
import { stringAvatar } from "../utils";
import CredentialCard from "../components/credential-card";
{/* import { TabPanel } from "@mui/lab"; */}
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import ProfileInfo from "../components/ProfileInfo";
import Box from "@mui/material/Box";
import { event as GAEvent } from "nextjs-google-analytics";

export interface Credential {
  id: string;
  txn_id: string;
  asset_index: string;
  from_address: string;
  to_address: string;
  create_at: string;
  update_at: string;
  status: string;
  asset_url: string;
  asset_name: string;
  firstname: string;
  lastname: string;
}

const useAuthGuard = () => {
  const router = useRouter(); //call the hook
  const { user, setUser } = useContext(AuthContext);
  useEffect(() => {
    async function getUser() {
      const token = localStorage.getItem("AccessToken");
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
    if (user?.role && user.role === "ISSUER") router.push("/issuerDashboard");
  }, []);

  return [user]; //identifier 
};

const useLearnerCredentials = (user: User | null) => {
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
      // console.log('data',data)
    } else {
      alert("Failed fetching user credentials.");
    }
  };

  return [credentials];
};

const LearnerDashboard = () => {
  const [user] = useAuthGuard();
  const [credentials] = useLearnerCredentials(user);
  const [value, setValue] = useState("1");
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  const tabDict: Record<string, string> = {
    "1": "Credential library",
    "2": "My account",
  };

  useEffect(() => {
    if (window.innerWidth < 580) {
      setIsMobile(true);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth > 580) {
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    });
  });

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    GAEvent("submit_form", {
      category: "Click",
      label: "LearnerDashboardTab"+tabDict[newValue].trim(),
    });
    setValue(newValue);
  };

  const handleLogout = () => {
    localStorage.removeItem("AccessToken");
    router.push("/");
  };

  const rightWrapClass = isMobile
      ? "dashboard-right-wrap-mobile dashboard-right-wrap"
      : "dashboard-right-wrap";
  const sideBarClass = isMobile
        ? "dashboard-sidebar-mobile dashboard-sidebar"
        : "dashboard-sidebar";
  const logoClass = isMobile ? "dashboard-logo-mobile dashboard-logo" : "dashboard-logo";

  return (
    <div className="user-dashboard-wrap">
      <div className={sideBarClass}>
        <div className={logoClass}>
          <a className="navbar-brand">
            {isMobile ? <img src="/android-chrome-192x192.png" width={150} alt="logo" />:
            <img src="/logo/logo-color.png" width={150} alt="logo" />
            }
          </a>
        </div>
        <div className="personal-info">
          <div className="avatar">
            <Avatar
              {...stringAvatar(user?.firstname + " " + user?.lastname)}
              sx={isMobile?{}:{ width: 100, height: 100 }}
            />
          </div>
          {isMobile ? <h6 className="name-display">
                {user?.firstname + " " + user?.lastname}
              </h6> :
          <h3 className="name-display">
            {user?.firstname + " " + user?.lastname}
          </h3>
          }
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
        <div className={rightWrapClass}>
          <div className="">
            <div className="dashboard-title">
              <span>My CValid Dashboard</span>
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
                    <Tab label={tabDict["1"]} value="1" />
                    <Tab label={tabDict["2"]} value="2" />
                  </TabList>
                </Box>
                <TabPanel value="1">
                  {!!user && (
                      <div>
                        {credentials.map((c: Credential) => (
                            <CredentialCard key={c.id} credential={c} />
                        ))}
                      </div>
                  )}
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

export default LearnerDashboard;
