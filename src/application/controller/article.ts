import { Controller, Get } from 'routing-controllers'

@Controller()
export class ArticleController {

    @Get('/articles')
    async getArticles() {
        return {
            code: 0,
            msg: 'success',
        }
    }
}
