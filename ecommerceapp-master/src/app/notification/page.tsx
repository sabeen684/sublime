"use client"
import { Client, Client2, LOGO } from "@/constants/image";
import UIButton from "@/ui/uibutton";
import Image from "next/image";
import { useState } from "react";

type DropdownState = {
    visible: boolean;
    selectedOption: string;
};

export default function Notification() {
    const [dropdownState, setDropdownState] = useState<{ [key: string]: DropdownState }>({
        first: { visible: false, selectedOption: '' },
        second: { visible: false, selectedOption: '' },
        third: { visible: false, selectedOption: '' },
        fourth: { visible: false, selectedOption: '' },
        fifth: { visible: false, selectedOption: '' },
    });

    const toggleDropdown = (id: string) => {
        setDropdownState(prevState => ({
            ...prevState,
            [id]: {
                ...prevState[id],
                visible: !prevState[id].visible
            }
        }));
    };

    const selectOption = (id: string, option: string) => {
        setDropdownState(prevState => ({
            ...prevState,
            [id]: {
                ...prevState[id],
                selectedOption: option,
                visible: false
            }
        }));
    };

    return (
        <div className="bgnotcontainer">
            <div className="frame-wrapper">
                <div className="notification">
                    <div className="notification-table">
                        <div className="notification-table--titlefield">
                            <div className="notification-table--titlefield_firstline">
                                <p className="notification-table--titlefield_firstline__title">Notifications</p>
                                <p className="notification-table--titlefield_firstline__icon"><span>Mark all as read&nbsp;&nbsp;<i className="fa-solid fa-xmark"></i></span></p>
                            </div>
                            <p className="notification-table--titlefield_secondline"><span className="notification-table--titlefield_secondline__span">All&nbsp;<span className="notification-table--titlefield_secondline__span-notnum">10</span></span></p>
                        </div>
                        <div className="notification-table--firstnot">
                            <div className="notification-table--firstnot_content">
                                <div className="notification-table--firstnot_content__image">
                                    <div className="notification-table--firstnot_content__image-dot">

                                    </div>
                                    <Image src={Client} alt="noti_Image" width={1000} height={1000} quality={100} />
                                </div>
                                <div className="notification-table--firstnot_content__message">
                                    <p><span className="notification-table--firstnot_content__message-content">Admin</span> is requesting access to <span className="notification-table--firstnot_content__message-content">featured product</span>.</p>
                                    <div className="notification-table--firstnot_content__message-buttons">
                                        <UIButton label="Accept" type="primary" className="main" />
                                        <UIButton label="Decline" type="bprimary" />
                                    </div>
                                </div>
                            </div>
                            <div className="notification-table--firstnot_ellipse">
                                <p>15h</p>
                                <i className="fa-solid fa-ellipsis iconss" onClick={() => toggleDropdown('first')}></i>
                                {dropdownState['first'].visible && (
                                    <div className="dropdown-menu">
                                        <button className="dropdown-item" onClick={() => selectOption('first', 'Mark as read')}>
                                            <div className="dropdown-item--content">Mark as read {dropdownState['first'].selectedOption === 'Mark as read' && <p className="tick">&nbsp;&nbsp;&nbsp;✔</p>}</div>
                                        </button>
                                        <button className="dropdown-item" onClick={() => selectOption('first', 'Archive')}>
                                            <div className="dropdown-item--content">Archive {dropdownState['first'].selectedOption === 'Archive' && <p className="tick">&nbsp;&nbsp;&nbsp;✔</p>}</div>
                                        </button>
                                        <button className="dropdown-item" onClick={() => selectOption('first', 'Turn off notifications')}>
                                            <div className="dropdown-item--content">Turn off notifications {dropdownState['first'].selectedOption === 'Turn off notifications' && <p className="tick">&nbsp;&nbsp;&nbsp;✔</p>}</div>
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="notification-table--secondnot">
                            <div className="notification-table--secondnot_content">
                                <div className="notification-table--secondnot_content__image">
                                    <Image src={Client} alt="noti_Image" width={1000} height={1000} quality={100} />
                                </div>
                                <div className="notification-table--secondnot_content__message">
                                    <p><span className="notification-table--secondnot_content__message-content">Patrick</span> added a comment on your <span className="notification-table--secondnot_content__message-content">product that was on sale</span>.</p>
                                    <div className="notification-table--secondnot_content__message-secondary">
                                        <div className="notification-table--secondnot_content__message-secondary--line"></div>
                                        <div className="notification-table--secondnot_content__message-secondary--message">“Looks perfect, as expected!”</div>
                                    </div>
                                </div>
                            </div>
                            <div className="notification-table--secondnot_ellipse">
                                <p>15h</p>
                                <i className="fa-solid fa-ellipsis iconss" onClick={() => toggleDropdown('second')}></i>
                                {dropdownState['second'].visible && (
                                    <div className="dropdown-menu">
                                        <button className="dropdown-item" onClick={() => selectOption('second', 'Mark as read')}>
                                            <div className="dropdown-item--content">Mark as read {dropdownState['second'].selectedOption === 'Mark as read' && <p className="tick">&nbsp;&nbsp;&nbsp;✔</p>}</div>
                                        </button>
                                        <button className="dropdown-item" onClick={() => selectOption('second', 'Archive')}>
                                            <div className="dropdown-item--content">Archive {dropdownState['second'].selectedOption === 'Archive' && <p className="tick">&nbsp;&nbsp;&nbsp;✔</p>}</div>
                                        </button>
                                        <button className="dropdown-item" onClick={() => selectOption('second', 'Turn off notifications')}>
                                            <div className="dropdown-item--content">Turn off notifications {dropdownState['second'].selectedOption === 'Turn off notifications' && <p className="tick">&nbsp;&nbsp;&nbsp;✔</p>}</div>
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>


                        <div className="notification-table--thirdnot">
                            <div className="notification-table--thirdnot_content">
                                <div className="notification-table--thirdnot_content__image">
                                    <Image src={LOGO} alt="noti_Image" width={1000} height={1000} quality={100} />
                                </div>
                                <div className="notification-table--thirdnot_content__message">
                                    <p className="notification-table--thirdnot_content__message-content">New Feature Alert!</p>
                                    <div className="notification-table--thirdnot_content__message-secondary">
                                        We&apos;re pleased to introduce the latest enhancements in our templating experience.
                                    </div>
                                    <div className="notification-table--thirdnot_content__message-button">
                                        <UIButton label="Try now" type="primary" />
                                    </div>
                                </div>
                            </div>
                            <div className="notification-table--thirdnot_ellipse">
                                <p>15h</p>
                                <i className="fa-solid fa-ellipsis iconss" onClick={() => toggleDropdown('third')}></i>
                                {dropdownState['third'].visible && (
                                    <div className="dropdown-menu">
                                        <button className="dropdown-item" onClick={() => selectOption('third', 'Mark as read')}>
                                            <div className="dropdown-item--content">Mark as read {dropdownState['third'].selectedOption === 'Mark as read' && <p className="tick">&nbsp;&nbsp;&nbsp;✔</p>}</div>
                                        </button>
                                        <button className="dropdown-item" onClick={() => selectOption('third', 'Archive')}>
                                            <div className="dropdown-item--content">Archive {dropdownState['third'].selectedOption === 'Archive' && <p className="tick">&nbsp;&nbsp;&nbsp;✔</p>}</div>
                                        </button>
                                        <button className="dropdown-item" onClick={() => selectOption('third', 'Turn off notifications')}>
                                            <div className="dropdown-item--content">Turn off notifications {dropdownState['third'].selectedOption === 'Turn off notifications' && <p className="tick">&nbsp;&nbsp;&nbsp;✔</p>}</div>
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="notification-table--forthnot">
                            <div className="notification-table--forthnot_content">
                                <div className="notification-table--forthnot_content__image">
                                    <Image src={Client2} alt="noti_Image" width={1000} height={1000} quality={100} />
                                </div>
                                <div className="notification-table--forthnot_content__message">
                                    <p><span className="notification-table--forthnot_content__message-content">Samantha</span> has shared a file with you.</p>
                                    <div className="notification-table--forthnot_content__message-secondary">
                                        <div className="notification-table--forthnot_content__message-secondary--message">
                                            <span className="mb"><i className="fa-light fa-file"></i></span>
                                            &nbsp;Demo File.pdf&nbsp;<span className="mb">2.2&nbsp;MB</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="notification-table--forthnot_ellipse">
                                <p>14h</p>
                                <i className="fa-solid fa-ellipsis iconss" onClick={() => toggleDropdown('fourth')}></i>
                                {dropdownState['fourth'].visible && (
                                    <div className="dropdown-menu">
                                        <button className="dropdown-item" onClick={() => selectOption('fourth', 'Mark as read')}>
                                            <div className="dropdown-item--content">Mark as read {dropdownState['fourth'].selectedOption === 'Mark as read' && <p className="tick">&nbsp;&nbsp;&nbsp;✔</p>}</div>
                                        </button>
                                        <button className="dropdown-item" onClick={() => selectOption('fourth', 'Archive')}>
                                            <div className="dropdown-item--content">Archive {dropdownState['fourth'].selectedOption === 'Archive' && <p className="tick">&nbsp;&nbsp;&nbsp;✔</p>}</div>
                                        </button>
                                        <button className="dropdown-item" onClick={() => selectOption('fourth', 'Turn off notifications')}>
                                            <div className="dropdown-item--content">Turn off notifications {dropdownState['fourth'].selectedOption === 'Turn off notifications' && <p className="tick">&nbsp;&nbsp;&nbsp;✔</p>}</div>
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="notification-table--fifthnot">
                            <div className="notification-table--fifthnot_content">
                                <div className="notification-table--fifthnot_content__image">
                                    <Image src={Client2} alt="noti_Image" width={1000} height={1000} quality={100} />
                                </div>
                                <div className="notification-table--fifthnot_content__message">
                                    <p><span className="notification-table--fifthnot_content__message-content">Samantha</span> has shared a file with you.</p>
                                    <div className="notification-table--fifthnot_content__message-secondary">
                                        <div className="notification-table--fifthnot_content__message-secondary--message">
                                            <span className="mb"><i className="fa-light fa-file"></i></span>
                                            &nbsp;Demo File.pdf&nbsp;<span className="mb">2.2&nbsp;MB</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="notification-table--fifthnot_ellipse">
                                <p>14h</p>
                                <i className="fa-solid fa-ellipsis iconss" onClick={() => toggleDropdown('fifth')}></i>
                                {dropdownState['fifth'].visible && (
                                    <div className="dropdown-menu">
                                        <button className="dropdown-item" onClick={() => selectOption('fifth', 'Mark as read')}>
                                            <div className="dropdown-item--content">Mark as read {dropdownState['fifth'].selectedOption === 'Mark as read' && <p className="tick">&nbsp;&nbsp;&nbsp;✔</p>}</div>
                                        </button>
                                        <button className="dropdown-item" onClick={() => selectOption('fifth', 'Archive')}>
                                            <div className="dropdown-item--content">Archive {dropdownState['fifth'].selectedOption === 'Archive' && <p className="tick">&nbsp;&nbsp;&nbsp;✔</p>}</div>
                                        </button>
                                        <button className="dropdown-item" onClick={() => selectOption('fifth', 'Turn off notifications')}>
                                            <div className="dropdown-item--content">Turn off notifications {dropdownState['fifth'].selectedOption === 'Turn off notifications' && <p className="tick">&nbsp;&nbsp;&nbsp;✔</p>}</div>
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="notification-pagination">
                        <div className="notification-pagination--pagenumber">
                            Showing 1-09 of 78
                        </div>
                        <div className="notification-pagination--button">
                            <button><i className="fa-solid fa-chevron-up fa-rotate-270"></i></button>
                            <button><i className="fa-solid fa-chevron-up fa-rotate-90"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
