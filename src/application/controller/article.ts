import { Controller, Get, Param } from 'routing-controllers'
import ArticleService from '../service/article'
import * as path from 'path'
import * as config from 'config'

@Controller()
export class ArticleController {

    @Get('/articles')
    async getArticles() {
        const fileList = ArticleService.getFileList(path.resolve(config.get('docsDir')))

        return {
            code: 0,
            msg: 'success',
            data: fileList.map(ArticleService.removeExt),
        }
    }

    @Get('/article/:articleName')
    async getArticle(@Param('articleName') articleName: string) {

        return {
            code: 0,
            msg: 'success',
            data: ArticleService.getFile(path.resolve(config.get('docsDir'), articleName)),
        }
    }
}
