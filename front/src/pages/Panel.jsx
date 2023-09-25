import React, { useEffect, useState } from "react";
import Dropdown from "../components/Dropdown";
import Logo from "../components/Logo";
import { Button } from "@material-tailwind/react";
import { NavLink, useParams } from "react-router-dom";
import Notificacion from "./Notificaciones/Recordatorio";
import Lapso from "./Lapsos/Lapso";
import {
  CardBody,
  Avatar,
  Typography,
  Tabs,
  TabsHeader,
  Tab,
} from "@material-tailwind/react";
import {
  HomeIcon,
  ChatBubbleLeftEllipsisIcon,
  PencilIcon,
} from "@heroicons/react/24/solid";
function Panel() {

  const [value, setValue] = useState("1");

  const handleChange = (newValue) => {
    setValue(newValue);
  }; 

  return (
    <>
      <div className="bg-gray-100 min-h-screen relative">
        <Logo />
        <div className="container mx-auto mt-4">
          <div className="mt-5 md:mt-0 md:w-96">
                <Tabs  value={value} >
                  <TabsHeader>
                    <Tab value="1" onClick={()=>{handleChange('1')}}>
                      <HomeIcon className="-mt-1 mr-2 inline-block h-5 w-5" />
                      Recordatorios
                    </Tab>
                    <Tab value="2" onClick={()=>{handleChange('2')}}>
                      <ChatBubbleLeftEllipsisIcon className="-mt-0.5 mr-2 inline-block h-5 w-5" />
                      Lapsos
                    </Tab>
                  </TabsHeader>
                </Tabs>
              </div>
        </div>
        <div className="mx-auto container relative">
          {value == 1 ? <Notificacion /> : <Lapso />}
          <div className="fixed right-0 bottom-0 mt-4 mx-6 mb-6">
            
            <NavLink
              to={
                value == 1
                  ? `/crear-recordatorio`
                  : "/crear-lapso"
              }
            >
              <Button>
                {value == 1
                  ? "CREAR RECORDATORIO"
                  : "crear lapso"}
              </Button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Panel;
