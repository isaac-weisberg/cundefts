import * as fs from 'fs'
import { Project } from '.';

export function read(path: string): Promise<Project> {
    return new Promise((fulfill, reject) => {
        fs.readFile(path, (err, data) => {
            if (err != undefined) {
                reject(err)
                return
            }
            let proj: Project
            try {
                proj = JSON.parse(data.toString())
            } catch(error) {
                reject(error)
                return
            }
            fulfill(proj)
        })
    })
}