export class AppConstants {

    public static get baseServidor() {
        return "http://localhost:8080/"
    }

    public static get baselogin() {
        return this.baseServidor + "/login"
    }

    // public static get baseUrl() {
    //     return this.baseServidor + "/usuario"
    // }
}