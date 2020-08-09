import * as fs from 'fs'
import * as path from 'path'
import * as assert from 'assert'

export default class ArticleService {
    static getFileList(dirPath: string): Array<string> {
        assert(fs.existsSync(dirPath), `dirPath [${dirPath}] 目录不存在`)
        return fs.readdirSync(dirPath, {
            withFileTypes: true,
        })
            // TODO: 暂时先不考虑2级文件夹，之后肯定会改
            .filter((dirent: fs.Dirent) => dirent.isFile())
            .map(dirent => dirent.name)
    }

    static getFile(filePath: string) {
        const ext = path.extname(filePath)
        if (!ext) {
            filePath = filePath + '.md'
        }
        assert(fs.existsSync(filePath), `filePath [${filePath}] 文件不存在`)
        return fs.readFileSync(filePath, {
            encoding: 'utf8',
        })
    }

    static removeExt(file: string) {
        return file.replace(path.extname(file), '')
    }
}
