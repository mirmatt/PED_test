import React, { FC, useState } from "react";
import styles from "./Home.module.css";
import { useMediaQuery } from "@mui/material";
import HeaderMobile from "../../components/HeaderMobile/HeaderMobile";
import BodyMobile from "../../components/BodyMobile/BodyMobile";
import Search from "../../components/Search/Search";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
    const isMobile = useMediaQuery("(max-width: 915px)");
	const [isSearchOpen, setSearch] = useState<boolean>(false);

    return (
        <div className={styles.Home}>
			{isSearchOpen ? <Search openSearch={setSearch}></Search> : ""}
            {isMobile && !isSearchOpen ? <HeaderMobile setSearch={setSearch} /> : ""}
            {isMobile && !isSearchOpen ? <BodyMobile /> : ""}
        </div>
    );
};

export default Home;
