import React, { Suspense } from "react"
import { Outlet } from "react-router-dom"

export default function Pcbox(props){
    return (
        <Suspense fallback={<div></div>}>
            <div>
                <div>
                    <Outlet/>
                    {props?.child}
                </div>
            </div>
        </Suspense>
    )
}