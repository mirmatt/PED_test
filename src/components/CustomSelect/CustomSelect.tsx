import React, { FC, useState } from "react";
import styles from "./CustomSelect.module.css";
import { MenuItem, Select } from "@mui/material";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";

interface CustomSelectProps {
    children: React.ReactNode | null;
    values: string[];
    isMultiple: boolean;
	sx?: object | null;
}

const CustomSelect: FC<CustomSelectProps> = (props) => {
    return (
        <div className={styles.CustomSelect}>
            <p className={styles.Label}>{props.children}</p>
            <Select
                IconComponent={UnfoldMoreIcon}
                defaultValue={props.values[0]}
                className={styles.inputProper}
				sx={props.sx}
            >
                {props.values.map((val) => {
                    return (
                        <MenuItem key={val} value={val}>
                            {val}
                        </MenuItem>
                    );
                })}
            </Select>
        </div>
    );
};

export default CustomSelect;
