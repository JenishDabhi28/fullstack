import { COnnectDB } from "@/app/lib/config/db.config";
import { UserModel } from "@/app/lib/models/User.models";
import {  VerifyToken } from "@/app/lib/service/Token.service";
import { NextRequest, NextResponse } from "next/server";

COnnectDB()
export const GET = async(request:NextRequest)=>{
    
    
    try {
        const tokenData =  request.cookies.get("authentication") || '';
             
            if(!tokenData){
                   return   NextResponse.json({error:"please first login"},{
                    status:401
                }) 
            }
            const user = await VerifyToken(tokenData.value);
    

        const existUser = await UserModel.findById(user).select("name email");
        if(!existUser){
          return   NextResponse.json({error:"User Not Found"},{
                    status:401
                }) 
        }


       return   NextResponse.json({msg:"profile fetched",user:existUser},{
                    status:200
                }) 

    } catch (error:any) {
               return  NextResponse.json({error:error.message},{
                    status:500
                })
    }
    
}