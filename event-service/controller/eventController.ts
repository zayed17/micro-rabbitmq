import { Request,Response } from "express";

export const eventCreate = async(req:Request,res:Response)=>{
    try {
        const {title,date,description,location} = req.body

    } catch (error) {
        console.log(error)
    }
}
