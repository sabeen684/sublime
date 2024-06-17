
// import { Messages } from "@/lib/message";
// import UIButton from "@/ui/uibutton";
// import UIInput from "@/ui/uiinput";
// import moment from "moment";
// import Image from "next/image";

// const Page = () => {
//     const now = moment();
//     const timeDifference = (messageTime: string) => {
//         const diffInHours = now.diff(moment(messageTime), "hour");
//         const diffInDays = now.diff(moment(messageTime), "days");
//         const diffInMonths = now.diff(moment(messageTime, "months"));
//         const diffInYears = now.diff(moment(messageTime), "years");
//         if (diffInYears >= 1) {
//             return `${diffInYears} year${diffInYears > 1 ? "s" : ""} ago`
//         }
//         else if (diffInMonths >= 1) {
//             return `${diffInMonths} month${diffInMonths > 1 ? "s" : ""} ago`
//         }
//         else if (diffInDays >= 1) {
//             return `${diffInDays} day${diffInDays > 1 ? "s" : ""} ago`
//         }
//         else {
//             return `${diffInHours} hour${diffInHours > 1 ? "s" : ""} ago`
//         }
//     }

//     return (
//         <div className="bgmessagecontainer">
//             <main className="frame-wrapper">
//                 <section className="framecontainer-content">
//                     <div className="inbox">
//                         <div className="inbox-header">
//                             <span className="inbox-header--left">
//                                 <i className="fa-solid fa-chevron-left"></i>
//                                 <p>Minerva Barnett</p>
//                             </span>
//                             <span className="inbox-header--right">
//                                 <i className="fa-solid fa-print"></i>
//                                 <i className="fa-regular fa-star"></i>
//                                 <i className="fa-solid fa-trash"></i>
//                             </span>
//                         </div>
//                         <div className="inbox-chat">
//                             {Messages.sort(
//                                 (a, b) => moment(a.time).valueOf() - moment(b.time).valueOf()
//                             ).map((message) => (
//                                 <div
//                                     className={
//                                         message.sentmessage
//                                             ? `sent inbox-chat--messagebody`
//                                             : `received inbox-chat--messagebody`
//                                     }
//                                     key={message.id}
//                                 >
//                                     {!message.sentmessage && (
//                                         <div className="inbox-chat--messagebody_imagecontainer">
//                                             <Image
//                                                 unoptimized
//                                                 src={message.image}
//                                                 alt="user"
//                                                 width={5}
//                                                 height={5}
//                                                 quality={100}
//                                                 className="image"
//                                             />
//                                         </div>
//                                     )}

//                                     <div
//                                         className={
//                                             message.sentmessage
//                                                 ? `messagesent inbox-chat--messagebody_message`
//                                                 : `messagereceived inbox-chat--messagebody_message`
//                                         }
//                                     >
//                                         <p>{message.message}</p>
//                                         <div className="inbox-chat--messagebody_message__time">
//                                             <p>{timeDifference(message.time)}</p>
//                                             <i className="fa-solid fa-ellipsis-vertical"></i>
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))}
//                             <div className="inbox-chat--write">
//                                 <UIInput style={{ width: "80%" }} placeholder={"Write message"} />
//                                 <i className="fa-solid fa-paperclip"></i>
//                                 <i className="fa-solid fa-file-image"></i>
//                                 <div className="inbox-chat--write_button">
//                                     <UIButton
//                                         label="Send"
//                                         type="primary"
//                                         style={{
//                                             width: "100%",
//                                             height: "35px",
//                                             justifyContent: "flex-start",
//                                         }}
//                                     />
//                                     <i className="fa-solid fa-paper-plane"></i>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//             </main>
//         </div>
//     );
// };

// export default Page;

import { Messages } from "@/lib/message";
import UIButton from "@/ui/uibutton";
import UIInput from "@/ui/uiinput";
import moment from "moment";
import Image from "next/image";
const Page = () => {
    const now = moment();
    const timeDifference = (messageTime: string) => {
        const diffInHours = now.diff(moment(messageTime), "hour");
        const diffInDays = now.diff(moment(messageTime), "days");
        const diffInMonths = now.diff(moment(messageTime, "months"));
        const diffInYears = now.diff(moment(messageTime), "years");
        if (diffInYears >= 1) {
            return `${diffInYears} year${diffInYears > 1 ? "s" : ""} ago`
        }
        else if (diffInMonths >= 1) {
            return `${diffInMonths} month${diffInMonths > 1 ? "s" : ""} ago`
        }
        else if (diffInDays >= 1) {
            return `${diffInDays} day${diffInDays > 1 ? "s" : ""} ago`
        }
        else {
            return `${diffInHours} hour${diffInHours > 1 ? "s" : ""} ago`
        }
    }
    return (
        <div className="bg">
            <main className="frame-wrapper">
                <section className="framecontainer-content">
                    <div className="inbox">
                        <div className="inbox-header">
                            <span className="inbox-header--left">
                                <i className="fa-solid fa-chevron-left"></i>
                                <p>Minerva Barnett</p>
                            </span>
                            <span className="inbox-header--right">
                                <i className="fa-solid fa-print"></i>
                                <i className="fa-regular fa-star"></i>
                                <i className="fa-solid fa-trash"></i>
                            </span>
                        </div>
                        <div className="inbox-chat">
                            {Messages.sort(
                                (a, b) => moment(a.time).valueOf() - moment(b.time).valueOf()
                            ).map((message) => (
                                <div
                                    className={
                                        message.sentmessage
                                            ? `sent inbox-chat--messagebody`
                                            : `received inbox-chat--messagebody`
                                    }
                                    key={message.id}
                                >
                                    {!message.sentmessage && (
                                        <div className="inbox-chat--messagebody_imagecontainer">
                                            <Image
                                                unoptimized
                                                src={message.image}
                                                alt="user"
                                                width={5}
                                                height={5}
                                                quality={100}
                                                className="image"
                                            />
                                        </div>
                                    )}
                                    <div
                                        className={
                                            message.sentmessage
                                                ? `messagesent inbox-chat--messagebody_message`
                                                : `messagereceived inbox-chat--messagebody_message`
                                        }
                                    >
                                        <p>{message.message}</p>
                                        <div className="inbox-chat--messagebody_message__time">
                                            <p>{timeDifference(message.time)}</p>
                                            <i className="fa-solid fa-ellipsis-vertical"></i>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="inbox-write">
                            <UIInput style={{ width: "80%" }} placeholder={"Write message"} />
                            <div className="inbox-write--button">
                                <UIButton
                                    label="Send"
                                    type="primary"
                                    style={{
                                        width: "100%",
                                        height: "35px",
                                        justifyContent: "flex-start",
                                    }}
                                />
                                <i className="fa-solid fa-paper-plane"></i>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};
export default Page;