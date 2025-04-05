import { useEffect, useState } from "react";

export interface inputData {
  image: string;
  gameContent: string;
  title: string;
  id: string;
  gameCover?:string
}

export function Tabbox(props: Partial<inputData>) {
  return (
    <>
      <div className="flex ">

          <div className="h-50 border-red-500 border-4 border-solid
          text-white w-[70vw] my-4 ml-5 bg-slate-900 flex items-center justify-between px-4 rounded-[30px]"
        style={{
          boxShadow:
            "15px 15px 30px rgb(25, 25, 25), -15px -15px 30px rgb(60, 60, 60)",
        }}>

            
        <div className="h-[80%] w-[60%] items-start justify-between flex flex-col flex-wrap">
          <p className="text-2xl">{props.title}</p>
          <p>{props.gameContent}</p>
        </div>
        <img
          src={props.image}
          alt="img"
          className="ring-pink-500 ring-2 h-[80%] min-w-[25%] aspect-square rounded-sm"
        />
        </div>

        <aside className="h-[90vh] w-[20vw] border-red-500 border-4 border-solid"></aside>


      </div>
    </>
  );
}
