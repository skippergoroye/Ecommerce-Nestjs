import { IsNotEmpty } from "class-validator";
import { HttpMethod } from "../entities/endpoint.entity";

export class CreateEndpointDto {
    @IsNotEmpty()
    url: string;



    @IsNotEmpty()
    method: HttpMethod
}
