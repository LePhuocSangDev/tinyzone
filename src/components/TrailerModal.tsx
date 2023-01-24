'use client';
import React, { useEffect, useRef, useState } from 'react';
interface Props {
  isShowing: boolean;
  setIsShowing: (value: boolean) => void;
  trailer: { key: string }[];
}
// const TrailerModal = ({ isShowing, setIsShowing, trailer }: Props) => {
//   const iframe = document.getElementById('iframe');
//   // useEffect(() => {
//   //   if (isShowing && iframe?.parentNode) {
//   //     iframe.appendChild(iframe);
//   //   }
//   // }, [isShowing]);
//   const handleClose = (): void => {
//     setIsShowing(false);
//     if (iframe?.parentNode) {
//       iframe.parentNode.removeChild(iframe);
//     }
//   };
//   return (
//     <div
//       id="modal"
//       className={`fixed top-0 left-0 z-20 w-screen h-screen flex items-center justify-center bg-[rgba(0,0,0,0.3)] bg-opacity-50 transform ${
//         isShowing ? 'scale-200' : 'scale-0'
//       }   transition-transform duration-300`}
//     >
//       <div className="relative bg-white h-[500px] w-[60vw]">
//         <button
//           onClick={handleClose}
//           className="absolute right-[10px] top-[5px] text-xl z-30 text-white"
//         >
//           &#10005;
//         </button>
//         <iframe
//           id="iframe"
//           title="trailer"
//           width="100%"
//           height="100%"
//           src={`https://www.youtube.com/embed/${
//             trailer?.length > 0 ? trailer[0]?.key || trailer[1]?.key : 'Or8NmkkqyZI'
//           }`}
//           allowFullScreen={true}
//         ></iframe>
//       </div>
//     </div>
//   );
// };

const TrailerModal = ({ isShowing, setIsShowing, trailer }: Props) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (isShowing && iframeRef.current) {
      iframeRef.current.src = `https://www.youtube.com/embed/${
        trailer?.length > 0 ? trailer[0]?.key || trailer[1]?.key : 'Or8NmkkqyZI'
      }`;
    }
  }, [isShowing, trailer]);

  const handleClose = (): void => {
    setIsShowing(false);
    if (iframeRef.current) {
      iframeRef.current.src = '';
    }
  };
  return (
    <div
      id="modal"
      className={`fixed top-0 left-0 z-20 w-screen h-screen flex items-center justify-center bg-[rgba(0,0,0,0.3)] bg-opacity-50 transform ${
        isShowing ? 'scale-200' : 'scale-0'
      }   transition-transform duration-300`}
    >
      <div className="relative bg-white h-[500px] w-[60vw]">
        <button
          onClick={handleClose}
          className="absolute right-[10px] top-[5px] text-xl z-30 text-white"
        >
          &#10005;
        </button>
        <iframe
          ref={iframeRef}
          title="trailer"
          width="100%"
          height="100%"
          allowFullScreen={true}
        ></iframe>
      </div>
    </div>
  );
};

export default TrailerModal;
