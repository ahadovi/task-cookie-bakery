import React from "react";
import toast, {Toaster} from 'react-hot-toast';
import Window from "src/components/window/Window";
import MailBox from "src/components/mail-box/MailBox";
import ThemeSwitcher from "src/components/theme-switcher/ThemeSwitcher";
import Cookie1 from 'src/assets/images/cookieLeft.jpg';

function App() {
    const createOrder = () => {
        const res = fetch(`${process.env.REACT_APP_MOCK_SERVER}`, {
            method: 'POST',
            headers: {
                accept: 'application.json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: crypto.randomUUID(),
                name: `${Math.random().toFixed(5)} Cookie bis kit`,
                price: '2$',
                timeSpan: `${new Date().toLocaleString()}`
            }),
            cache: 'default'
        }).then((res: any) => {
            console.log(res.ok);
        });
        toast.promise(res, {
            loading: 'Loading...',
            success: `Order Created Successfully at: ${new Date().toLocaleString()}`,
            error: 'Opps!Something went wrong!',
        });
    }

    return (
        <div className="container mx-auto font-['Lily_Script_One'] px-3 overflow-hidden">
            <div
                className={"relative mx-auto max-w-[60%] max-[800px]:max-w-[100%] max-[1035px]:max-w-[100%] max-[1300px]:max-w-[75%] max-[800px]:h-[400px] h-[750px] mt-8 bg-slate-100 dark:bg-slate-900 border-b-[1rem] border-solid border-[#270D0B] dark:border-[#BD8C61] rounded-lg overflow-hidden"}>

                <ThemeSwitcher/>

                <div
                    className={"absolute bg-[#EFE2B2] dark:bg-[#270D0B] w-[75%] h-[400px] max-[800px]:h-[215px] bottom-0 left-[50%] -translate-x-[50%] before:absolute before:content-[''] before:top-0 before:left-0 before:w-full before:h-2.5 before:bg-[rgba(0,0,0,0.1)]"}>
                    <div
                        className={"absolute top-[-115px] left-0 h-[115px] max-[800px]:top-[-80px] max-[800px]:h-[80px] w-full bg-transparent before:absolute before:content-[''] before:top-0 before:left-0 before:w-[60%] before:h-full before:bg-[#84563C] before:skew-x-[330deg] after:absolute after:content-[''] after:top-0 after:right-0 after:w-[60%] after:h-full after:bg-[#84563C] after:skew-x-[30deg]"}/>

                    <div
                        className={"absolute left-[50%] max-[480px]:text-[1rem] max-[800px]:-top-[1.25rem] -top-[2.25rem] -translate-x-[50%] text-[2rem] max-[800px]:text-[1.25rem] bg-[#5A2C22] text-white rounded-lg px-6 py-3 max-[800px]:py-2.5 max-[800px]:px-4"}>
                        Cookie Bakery
                    </div>

                    <div
                        className={"group absolute bottom-[0] left-[50%] bg-[#84563C] -translate-x-[50%] w-[30%] h-[75%] rounded-t-lg cursor-pointer dark:pointer-events-none overflow-hidden"}
                        onClick={createOrder}
                    >
                        <div
                            className={"absolute top-[50%] left-[1.25rem] bg-[#270D0B] -translate-y-[-50%] w-[30px] h-[30px] max-[800px]:w-[18px] max-[800px]:h-[18px] rounded-full border-white border-solid border-2 outline-[#270D0B] outline outline-4 hover:outline-[#5A2C22] hover:bg-[#5A2C22] transition"}/>
                        <div className="absolute text-center top-[-5rem] max-[800px]:top[-10rem] left-0 right-0 ease-in-out duration-300 group-hover:top-[3rem] max-[800px]:group-hover:top-[1rem]">
                            <span className={"text-white bg-[#5A2C22] px-3 py-2 rounded-[0.25rem] inline-block max-w-[75%] max-[640px]:text-[0.75rem]"}>Click to Create an Order</span>
                        </div>
                    </div>

                    <Window
                        cookieImage={Cookie1}
                        title={'Hover Cookie'}
                        className={'left-[5%]'}
                    />

                    <Window
                        cookieImage={Cookie1}
                        title={'Hover Cookie'}
                        className={'right-[5%]'}
                    />

                    <MailBox/>
                </div>
                <Toaster
                    containerStyle={{
                        top: 80,
                    }}
                    toastOptions={{
                        duration: 3000,
                    }}
                />
            </div>
        </div>
    );
}

export default App;
