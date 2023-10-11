import React, { FC, useState } from "react";
import styles from "./Search.module.css";
import CloseIcon from "@mui/icons-material/Close";
import { Button, Divider, IconButton, TextField, Slider } from "@mui/material";
import FlatButton from "../FlatButton/FlatButton";
import CustomSelect from "../CustomSelect/CustomSelect";
import options from "../../data/searchData";

interface SearchProps {
    openSearch: Function;
}

const Search: FC<SearchProps> = (props) => {
    const [rangeVal, setRangeVal] = useState<number[]>([5000, 20000]);

    const onChangeRange = (_event: Event, input: number | number[]): void => {
        setRangeVal(input as number[]);
    };

    return (
        <div className={styles.Search}>
            <div className={styles.Flex}>
                <p className={styles.Title}>Filter</p>
                <IconButton
                    size="large"
                    edge="start"
                    onClick={() => {
                        props.openSearch(false);
                    }}
                >
                    <CloseIcon></CloseIcon>
                </IconButton>
            </div>
            <Divider
                sx={{
                    margin: "0 -5vw",
                }}
            ></Divider>
            <div>
                <p className={styles.Label}>Villa Ideas</p>
                <div className={styles.buttonFlex}>
                    <FlatButton width="33.333333%">Pool</FlatButton>
                    <FlatButton width="33.333333%">Luxury</FlatButton>
                    <FlatButton width="33.333333%">Seaview</FlatButton>
                    <FlatButton width="33.333333%">Couples</FlatButton>
                    <FlatButton width="33.333333%">Large</FlatButton>
                    <FlatButton width="33.333333%">Family</FlatButton>
                </div>
            </div>
            <div>
                <CustomSelect values={options["Experiences"]} isMultiple={true}>
                    Experiences
                </CustomSelect>
            </div>
            <div>
                <CustomSelect values={options["Locations"]} isMultiple={false}>
                    Search by location
                </CustomSelect>
            </div>
            <div>
                <CustomSelect values={options["Airports"]} isMultiple={false}>
                    Search by airport
                </CustomSelect>
            </div>
            <div className={styles.datesFlex}>
                <p className={[styles.Label, styles.dateLabel].join(" ")}>Check-in</p>
                <p className={[styles.Label, styles.dateLabel].join(" ")}>Check-out</p>
                <TextField
                    className={[styles.Label, styles.dateInput, styles.leftDate].join(" ")}
                    type="date"
                    sx={{
                        "& .MuiOutlinedInput-root": {
                            "&.Mui-focused fieldset": {
                                borderColor: "rgba(0, 0, 0, 0.23)",
                                borderWidth: "1px",
                            },
                        },
                    }}
                ></TextField>

                <TextField
                    className={[styles.Label, styles.dateInput, styles.rightDate].join(" ")}
                    type="date"
                    sx={{
                        "& .MuiOutlinedInput-root": {
                            "&.Mui-focused fieldset": {
                                borderColor: "rgba(0, 0, 0, 0.23)",
                                borderWidth: "1px",
                            },
                        },
                    }}
                ></TextField>
            </div>
            <div>
                <p className={styles.Label}>Adults</p>
                <TextField className={styles.Input} type="number" defaultValue={2}></TextField>
            </div>
            <div>
                <p className={styles.Label}>Children (age 2-12)</p>
                <TextField className={styles.Input} type="number" defaultValue={2}></TextField>
            </div>
            <div>
                <p className={styles.Label}>Infants {"age >2"}</p>
                <TextField className={styles.Input} type="number" defaultValue={2}></TextField>
            </div>
            <div className={styles.Flex}>
                <CustomSelect
                    values={options["Bedrooms"]}
                    isMultiple={false}
                    sx={{
                        width: "80%",
                    }}
                >
                    Bedrooms
                </CustomSelect>
                <div className={styles.currencyFlex}>
                    <p className={styles.Label}>Currency</p>
                    <div className={styles.currencyButtonFlex}>
                        <FlatButton width="25%">€</FlatButton>
                        <FlatButton width="25%">$</FlatButton>
                        <FlatButton width="25%">£</FlatButton>
                        <FlatButton width="25%">¥</FlatButton>
                    </div>
                </div>
            </div>
            <div className={styles.currencyFlex}>
                <p className={styles.Label}>Price range</p>
                <p className={styles.rangeDisplay}>{rangeVal.join(" - ")}</p>
                <Slider
                    defaultValue={rangeVal}
                    value={rangeVal}
                    onChange={onChangeRange}
                    step={1000}
                    min={0}
                    max={30000}
                ></Slider>
            </div>
            <Divider
                sx={{
                    margin: "2vh -5vw",
                }}
            ></Divider>
            <div className={styles.actionFlex}>
                <Button className={styles.resetButton}>RESET FILTER</Button>
                <Button
                    className={styles.applyButton}
                    onClick={() => {
                        props.openSearch(false);
                    }}
                >
                    APPLY FILTER
                </Button>
            </div>
        </div>
    );
};

export default Search;
