export class FileValidation {

    static isTextFile(file: File) : boolean {
        return ["text/plain"].includes(file.type) || file.name.endsWith('doc') || file.name.endsWith('docx');
    }
}