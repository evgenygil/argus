export class CreateServerDto {
    readonly name: string;
    readonly ip: string;
    readonly available: boolean;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
