import { useState } from 'react';
import { IconLayoutDashboard, IconSettings, IconDevices, IconLogout,IconBolt  } from '@tabler/icons';
import { Box, NavLink } from '@mantine/core';
import { useNavigate } from "react-router-dom";

const data = [
  { icon: IconLayoutDashboard, label: 'Tableau de bord', path: '/'},
  { icon: IconBolt, label: 'Consomation', path: '/Consomation'},
  { icon: IconDevices, label: 'Appareil', path: '/Devices'},
  { icon: IconSettings, label: 'Paramettre',path: '/Settings'},
  { icon: IconLogout, label: 'Déconnexion', path: '/'},
];

function NavBar() {
  const navigate = useNavigate();
  const [active, setActive] = useState(0);

  const items = data.map((item, index) => (
    <NavLink
      key={item.label}
      active={index === active}
      label={item.label}
      description={item.description}
      rightSection={item.rightSection}
      icon={<item.icon size={16} stroke={1.5} />}
      onClick={() => {setActive(index); navigate(item.path)}}
      sx={{padding: '1rem'}}
    ></NavLink>
  ));

  return <Box sx={{ width: 220, paddingTop: '10rem' ,height: '40rem' , display: 'inline-block'}}>{items}</Box>;
}

export default NavBar;