import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { assets } from "../assets/assets";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (isOpen) => () => setOpen(isOpen);

    const menuItems = [
        { label: "Principal", path: "/" },
        { label: "Serviços", path: "/service" },
        { label: "Sobre", path: "/about" },
        { label: "Contato", path: "/contact" },
    ];

    const DrawerList = () => (
        <Box sx={{ width: 250 }} role="presentation">
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "14px",
                    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
                }}
            >
                <h3 style={{ margin: 0, fontSize: 22 }}>Menu</h3>
                <button
                    onClick={toggleDrawer(false)}
                    style={{
                        border: "none",
                        background: "transparent",
                        fontSize: "16px",
                        cursor: "pointer",
                    }}
                >
                    ✖
                </button>
            </Box>
            <List>
                {menuItems.map(({ label, path }) => (
                    <ListItem key={label} disablePadding>
                        <ListItemButton sx={{ width: "100%", justifyContent: "center" }}>
                            <NavLink
                                to={path}
                                className={({ isActive }) =>
                                    `w-full text-center ${
                                        isActive ? "text-purple-600 font-bold" : "text-black"
                                    } hover:scale-105 transition ease-in-out`
                                }
                            >
                                {label}
                            </NavLink>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div className="fixed top-0 left-0 w-full bg-custom-pink shadow-md px-8 flex items-center justify-between z-50">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
                <img src={assets.logo} className="h-20 w-20" alt="Logo" />
            </Link>

            {/* Itens do Menu Centralizados */}
            <ul className="hidden sm:flex flex-grow justify-center gap-8 text-lg">
                {menuItems.map(({ label, path }) => (
                    <NavLink
                        key={label}
                        to={path}
                        className={({ isActive }) =>
                            `relative transition duration-200 ease-in-out ${
                                isActive ? "text-purple-600 font-bold" : "text-gray-800"
                            }`
                        }
                    >
                        {label}
                    </NavLink>
                ))}
            </ul>

            {/* Ícone do Menu Mobile */}
            <BiMenuAltRight
                onClick={toggleDrawer(true)}
                className="w-10 h-10 cursor-pointer text-black sm:hidden"
            />

            {/* Menu Drawer */}
            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <DrawerList />
            </Drawer>
        </div>
    );
};

export default Navbar;
