/** @format */

import React, { useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';

const UserMessage = ({ text }) => (
  <div className="right flex items-start justify-end gap-2 m-6">
    <div
      className="bg-[#F0F0F0] text-main-dark text-[17px] px-4 py-3"
      style={{ borderRadius: '20px 20px 0px 20px' }}>
      <ReactMarkdown className="prose">{text}</ReactMarkdown>
    </div>    
    <img
      src="/images/person.png"
      alt="default"
      className="w-[40px] h-[40px] rounded-full translate-y-1"
    />
  </div>
);

const BotMessage = ({ text, messagesEndRef }) => (
  <div className="left flex items-start gap-2">
    
    <img
      src="/images/bot.svg"
      alt="bot"
      className="w-[40px] translate-y-1"
    />
    
    <div
      className="bg-[#EFF7FF] text-[#1B3252] text-[17px] px-4 py-3"
      style={{ borderRadius: '20px 20px 20px 0px' }}>        
      <ReactMarkdown className="prose">{text}</ReactMarkdown>
      <div ref={messagesEndRef}></div>      
    </div>
  </div>
);

const MsgLoadAnimation = () => (
  <div className="left flex items-start gap-2">
    <img
      src="/images/bot.svg"
      alt="bot"
      className="w-[40px] translate-y-1"
    />
    <div
      className="bg-[#EFF7FF] text-[#595959] text-[17px] w-fit px-4 py-3"
      style={{ borderRadius: '20px 20px 20px 0px' }}>
      <div className="flex items-center gap-2 text-sm">
        <div className="lds-dots relative flex items-center gap-2">
          <div className="bg-main w-2.5 h-2.5 rounded-full"></div>
          <div className="bg-main w-2.5 h-2.5 rounded-full"></div>
          <div className="bg-main w-2.5 h-2.5 rounded-full"></div>
        </div>
      </div>
    </div>
  </div>
);

const ChatBotUniprep = ({ userData }) => {
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [textareaHeight, setTextareaHeight] = useState(50);
  const [isChatVisible, setIsChatVisible] = useState(false);
  const [chatMessageHistory, setchatMessageHistory] = useState([]);

  const textareaRef = useRef(null);
  const messagesEndRef = useRef(null);
  const chatbotScrollRef = useRef(null);

  const [shouldScroll, setShouldScroll] = useState(true);

  // const isTokenValid = useTokenValidation(accessToken);
  const [alertMessage, setAlertMessage] = useState('');

  // useEffect(() => {
  //   if (!isTokenValid) {
  //     setAlertMessage('Your session is about to expire.');
  //   }
  // }, [isTokenValid]);

  const handleDismissAlert = () => {
    setAlertMessage('');
  };

  

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  

  useEffect(() => {
    if (textareaRef.current) {
      const currentHeight = textareaRef.current.scrollHeight;
      setTextareaHeight(currentHeight > 200 ? 200 : currentHeight);
    }
    if (inputValue === '') {
      setTextareaHeight(50);
    }
  }, [inputValue]);

  useEffect(() => {
    if (shouldScroll) {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    if (chatbotScrollRef.current) {
      chatbotScrollRef.current.scrollTo({
        top: chatbotScrollRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }
  }, [chatMessageHistory, shouldScroll]);

  const sendPresetMessage = (presetMessage) => {
    setIsChatVisible(true);
    // chatBotMessage(presetMessage);
  };

  // const handleChatVisibility = () => {
  //   setIsChatVisible(true);
  //   setTimeout(() => {
  //     if (chatbotScrollRef.current) {
  //       chatbotScrollRef.current.scrollTo({
  //         top: chatbotScrollRef.current.scrollHeight,
  //         behavior: 'smooth',
  //       });
  //     }
  //   }, 0);

  // };

  return (
    <>
      
        <div className={`relative flex flex-col pt-[40px] min-h-[650px] h-full`}>
          {/* h-full */}
          

          <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[22px] text-center font-semibold z-30">
            Unibot
          </div>
          <div className="relative flex flex-col flex-1 z-30 -pb-4">
            <div
              ref={chatbotScrollRef}
              className={`customScroll min-h-full flex-1 flex flex-col relative rounded-t-xl overflow-x-hidden overflow-y-auto pr-2 ${
                isChatVisible ? 'max-h-[350px]' : ''
              }`}
              >
              {!isChatVisible && (
                <div className="flex items-center gap-10 flex-col text-center h-full bg-white rounded-xl p-5">
                  <div className="flex-1 flex items-center justify-center flex-col gap-3">
                    <img
                      src="/images/bot.svg"
                      alt="bot icon"
                      className="mx-auto mb-2"
                    />
                    <div className="bg-[#EFF7FF] rounded-lg px-5 py-3">
                    You are 8-weeks away from an interview!{' '}
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-3 flex-wrap max-w-[900px] mx-auto">
                    <button
                      onClick={() =>
                        sendPresetMessage('How to build a value-based resume?')
                      }
                      className="mainButton flex px-4 py-3 font-[600] bg-white border border-main-dark text-[15px] rounded-lg transition hover:bg-main hover:text-white hover:border-main w-fit">
                      How to build a value-based resume?
                    </button>
                    <button
                      onClick={() =>
                        sendPresetMessage('How to enhance my LinkedIn profile?')
                      }
                      className="mainButton flex px-4 py-3 font-[600] bg-white border border-main-dark text-[15px] rounded-lg transition hover:bg-main hover:text-white hover:border-main w-fit">
                      How to enhance my LinkedIn profile?
                    </button>
                    <button
                      onClick={() =>
                        sendPresetMessage(
                          'How to crack a job as a total fresher?'
                        )
                      }
                      className="mainButton flex px-4 py-3 font-[600] bg-white border border-main-dark text-[15px] rounded-lg transition hover:bg-main hover:text-white hover:border-main w-fit">
                      How to crack a job as a total fresher?
                    </button>
                    <button
                      onClick={() =>
                        sendPresetMessage(
                          'How do I build an irresistible profile?'
                        )
                      }
                      className="mainButton flex px-4 py-3 font-[600] bg-white border border-main-dark text-[15px] rounded-lg transition hover:bg-main hover:text-white hover:border-main w-fit">
                       How do I build an irresistible profile?
                    </button>
                    {/* <button
                      onClick={() =>
                        sendPresetMessage(
                          ' Job search strategies for international studnets?'
                        )
                      }
                      className="mainButton flex px-4 py-3 font-[600] bg-white border border-main-dark text-[15px] rounded-lg transition hover:bg-main hover:text-white hover:border-main w-fit">
                      {' '}
                      Job search strategies for international studnets?
                    </button> */}
                  </div>
                </div>
              )}

              {isChatVisible && (
                <div className="flex flex-col flex-1 bg-white  justify-end relative rounded-xl ">
                  {chatMessageHistory.map((message, index) =>
                    message.type === 'user' ? (
                      <UserMessage
                        key={index}
                        text={message.text}
                      />
                    ) : message.loading ? (
                      <MsgLoadAnimation key={index} />
                    ) : (
                      <BotMessage
                        key={index}
                        text={message.text}
                        messagesEndRef={messagesEndRef}
                      />
                    )
                  )}

                  {/* <div ref={messagesEndRef}></div> */}
                </div>
              )}
            </div>
          </div>

          <div className="flex items-end gap-2 ">
            {/* <ChatHistory/> */}
            {/* <button className="flex items-center justify-center gap-2 bg-white border border-[#0000001A] overflow-hidden rounded-xl h-[50px] -translate-y-2 px-3 sm:px-4">
              <svg
                className="min-w-[15px] min-h-[15px] sm:min-w-[18px] sm:min-h-[18px]"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.25 9.75H0V8.25H8.25V0H9.75V8.25H18V9.75H9.75V18H8.25V9.75Z"
                  fill="#8C8C8C"
                />
              </svg>
            </button> */}

            <div className="w-full bg-white py-2">
              <div
                className={`flex items-end gap-2 bg-white border border-[#0000001A] overflow-hidden min-h-[50px] max-h-[400px] pl-5 rounded-xl`}>
                {/* <textarea
                  placeholder="Shoot your job search queries."
                  value={inputValue}
                  onChange={handleInputChange}
                  onKeyDown={(e) => {
                    // Check if 'Enter' is pressed without the 'Shift' key
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault(); // Prevent the default action to avoid inserting a new line
                      sendMessage(); // Call your sendMessage function
                    }                    
                  }}
                  ref={textareaRef}
                  className={`customScroll border-none outline-none resize-none w-full h-full py-3 pr-2 ${
                    inputValue === '' ? 'overflow-hidden whitespace-nowrap' : ''
                  }`}
                  style={{
                    height: `${textareaHeight}px`,
                    overflow: textareaHeight < 200 ? 'hidden' : 'scroll',
                  }}></textarea> */}
                <button
                  className="-translate-y-4 pl-3 pr-5"
                  // onClick={sendMessage}
                  >
                  <svg
                    width="19"
                    height="17"
                    viewBox="0 0 19 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M0 16.0868V10.0868L8 8.08679L0 6.08679V0.086792L19 8.08679L0 16.0868Z"
                      fill="#4C8AE1"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
     
    </>
  );
};

export default ChatBotUniprep;