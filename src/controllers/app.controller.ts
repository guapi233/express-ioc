import { Request, Response } from 'express'
import { Controller, Get, Middleware, Exception, Success, Inject } from '@/core'
import { AppSevice } from '@/services/app.service'
import { Example2Sevice } from '@/services/example2.service'

// controller exception capture
@Exception()
@Controller()
export default class AppController {
  constructor(
    @Inject(Example2Sevice) private readonly Example2Sevice: Example2Sevice,
    private readonly appService: AppSevice
  ) {}

  @Get()
  @Middleware((req, res, next) => {
    console.log('middleware')
    next()
  })
  home(req: Request, res: Response) {
    throw new Success()
  }

  @Get('example')
  // method exception capture
  @Exception()
  getExample(req: Request, res: Response) {
    return this.Example2Sevice.getExample()
  }

  @Get('app')
  // method exception capture
  @Exception()
  getHellp(req: Request, res: Response) {
    return this.appService.getHello()
  }
}