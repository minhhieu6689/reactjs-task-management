
class Auth  {
    constructor() {
        this.authenticated = false
        
    }
    
    login(){
        this.authenticated = true
        return 
    }
    logout() {
        this.authenticated = false
        return
        
    }
    isAuthenticated () {
        return this.authenticated
        
    }
}

export default new Auth();