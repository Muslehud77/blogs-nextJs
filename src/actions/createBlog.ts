"use server"

import { TBlog } from "@/app/types"

export const createBlog = async (data:TBlog)=>{
    const res = await fetch("http://localhost:3002/blogs",{method:"POST",body:JSON.stringify(data),headers:{
        "Content-Type":"application/json"
    }})

    return res.json();
}