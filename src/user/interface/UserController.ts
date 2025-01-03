import { NextFunction, Request, Response } from 'express';
import { ApiAmbiguousResponse, ApiOperation } from '@nestjs/swagger';

export default interface UserController {
	test(req: Request, res: Response, next: NextFunction): Promise<Response>;
}
