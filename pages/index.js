import Datepicker from "../src";
import { useState } from "react";
import { COLORS } from "../src/constants";
import dayjs from "dayjs";
import Head from "next/head";

export default function Playground() {
    const [value, setValue] = useState({
        startDate: null,
        endDate: null
    });
    const [primaryColor, setPrimaryColor] = useState("blue");
    const [useRange, setUseRange] = useState(true);
    const [showFooter, setShowFooter] = useState(false);
    const [showShortcuts, setShowShortcuts] = useState(false);
    const [configs, setConfigs] = useState(null);
    const [asSingle, setAsSingle] = useState(false);
    const [placeholder, setPlaceholder] = useState("");
    const [separator, setSeparator] = useState("~");
    const [i18n, setI18n] = useState("en");
    const [disabled, setDisabled] = useState(false);
    const [inputClassName, setInputClassName] = useState("");
    const [containerClassName, setContainerClassName] = useState("");
    const [displayFormat, setDisplayFormat] = useState("YYYY-MM-DD");
    const [readOnly, setReadOnly] = useState(false);
    const [startFrom, setStartFrom] = useState("2023-03-01");

    return (
        <div className="px-4 py-8">
            <Head>
                <title>react-tailwindcss-datepicker PlayGround</title>
            </Head>
            <h1 className="text-center font-semibold text-xl">
                <pre className="text-gray-600 text-lg bg-gray-200 max-w-max mx-auto px-2 rounded">
                    react-tailwindcss-datepicker
                </pre>
                <span className="text-gray-700">PlayGround</span>
            </h1>

            <div className="max-w-md mx-auto my-4">
                <Datepicker
                    value={value}
                    primaryColor={primaryColor}
                    onChange={setValue}
                    useRange={useRange}
                    showFooter={showFooter}
                    showShortcuts={showShortcuts}
                    configs={configs}
                    asSingle={asSingle}
                    placeholder={placeholder}
                    separator={separator}
                    startFrom={
                        startFrom.length && dayjs(startFrom).isValid() ? new Date(startFrom) : null
                    }
                    i18n={i18n}
                    disabled={disabled}
                    inputClassName={inputClassName}
                    containerClassName={containerClassName}
                    displayFormat={displayFormat}
                    readOnly={readOnly}
                />
            </div>

            <div className="py-4 max-w-3xl mx-auto flex flex-row flex-wrap">
                <div className="w-full sm:w-1/3 pr-2 flex flex-row flex-wrap sm:flex-col">
                    <div className="mb-2 w-1/2 sm:w-full">
                        <div className="inline-flex items-center">
                            <input
                                type="checkbox"
                                className="mr-2 rounded"
                                id="useRange"
                                checked={useRange}
                                onChange={e => setUseRange(e.target.checked)}
                            />
                            <label className="block" htmlFor="useRange">
                                Use Range
                            </label>
                        </div>
                    </div>
                    <div className="mb-2 w-1/2 sm:w-full">
                        <div className="inline-flex items-center">
                            <input
                                type="checkbox"
                                className="mr-2 rounded"
                                id="showFooter"
                                checked={showFooter}
                                onChange={e => setShowFooter(e.target.checked)}
                            />
                            <label className="block" htmlFor="showFooter">
                                Show Footer
                            </label>
                        </div>
                    </div>
                    <div className="mb-2 w-1/2 sm:w-full">
                        <div className="inline-flex items-center">
                            <input
                                type="checkbox"
                                className="mr-2 rounded"
                                id="showShortcuts"
                                checked={showShortcuts}
                                onChange={e => setShowShortcuts(e.target.checked)}
                            />
                            <label className="block" htmlFor="showShortcuts">
                                Show Shortcuts
                            </label>
                        </div>
                    </div>
                    <div className="mb-2 w-1/2 sm:w-full">
                        <div className="inline-flex items-center">
                            <input
                                type="checkbox"
                                className="mr-2 rounded"
                                id="asSingle"
                                checked={asSingle}
                                onChange={e => setAsSingle(e.target.checked)}
                            />
                            <label className="block" htmlFor="asSingle">
                                As Single
                            </label>
                        </div>
                    </div>
                    <div className="mb-2 w-1/2 sm:w-full">
                        <div className="inline-flex items-center">
                            <input
                                type="checkbox"
                                className="mr-2 rounded"
                                id="disabled"
                                checked={disabled}
                                onChange={e => setDisabled(e.target.checked)}
                            />
                            <label className="block" htmlFor="disabled">
                                Disabled
                            </label>
                        </div>
                    </div>
                    <div className="mb-2 w-1/2 sm:w-full">
                        <div className="inline-flex items-center">
                            <input
                                type="checkbox"
                                className="mr-2 rounded"
                                id="readOnly"
                                checked={readOnly}
                                onChange={e => setReadOnly(e.target.checked)}
                            />
                            <label className="block" htmlFor="readOnly">
                                Read Only
                            </label>
                        </div>
                    </div>
                </div>
                <div className="w-full sm:w-1/3 pr-2 flex flex-col">
                    <div className="mb-2">
                        <label className="block" htmlFor="primaryColor">
                            Primary Color
                        </label>
                        <select
                            className="rounded block w-full border-gray-200 border px-4 py-2"
                            id="primaryColor"
                            value={primaryColor}
                            onChange={e => {
                                setPrimaryColor(e.target.value);
                            }}
                        >
                            {COLORS.map((color, i) => (
                                <option key={i} value={color}>
                                    {color}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-2">
                        <label className="block" htmlFor="placeholder">
                            Placeholder
                        </label>
                        <input
                            className="rounded border px-4 py-2 w-full border-gray-200"
                            id="placeholder"
                            value={placeholder}
                            onChange={e => {
                                setPlaceholder(e.target.value);
                            }}
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block" htmlFor="separator">
                            Separator
                        </label>
                        <input
                            className="rounded border px-4 py-2 w-full border-gray-200"
                            id="separator"
                            value={separator}
                            onChange={e => {
                                setSeparator(e.target.value);
                            }}
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block" htmlFor="startFrom">
                            Start From
                        </label>
                        <input
                            className="rounded border px-4 py-2 w-full border-gray-200"
                            id="startFrom"
                            value={startFrom}
                            onChange={e => {
                                setStartFrom(e.target.value);
                            }}
                        />
                    </div>
                </div>
                <div className="w-full sm:w-1/3 pr-2 flex flex-col">
                    <div className="mb-2">
                        <label className="block" htmlFor="i18n">
                            i18n
                        </label>
                        <input
                            className="rounded border px-4 py-2 w-full border-gray-200"
                            id="i18n"
                            value={i18n}
                            onChange={e => {
                                setI18n(e.target.value);
                            }}
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block" htmlFor="displayFormat">
                            Display Format
                        </label>
                        <input
                            className="rounded border px-4 py-2 w-full border-gray-200"
                            id="displayFormat"
                            value={displayFormat}
                            onChange={e => {
                                setDisplayFormat(e.target.value);
                            }}
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block" htmlFor="inputClassName">
                            Input Class
                        </label>
                        <input
                            className="rounded border px-4 py-2 w-full border-gray-200"
                            id="inputClassName"
                            value={inputClassName}
                            onChange={e => {
                                setInputClassName(e.target.value);
                            }}
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block" htmlFor="containerClassName">
                            Container Class
                        </label>
                        <input
                            className="rounded border px-4 py-2 w-full border-gray-200"
                            id="containerClassName"
                            value={containerClassName}
                            onChange={e => {
                                setContainerClassName(e.target.value);
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-row flex-wrap items-center justify-center w-full">
                <a
                    href="https://github.com/onesine/react-tailwindcss-datepicker"
                    className="block text-gray-700 hover:text-gray-600"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="w-6 h-6"
                        viewBox="0 0 16 16"
                    >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                </a>
            </div>
        </div>
    );
}
