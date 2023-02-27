function Greetings({lang, children}) {
    let greet = ''
    if (lang === 'de'){
        greet = 'Hallo'
    } else if (lang === 'en'){
        greet = 'Hello'        
    } else if (lang === 'es'){
        greet='Hola'
    } else if (lang === 'fr'){
        greet = 'Bonjour'
    }
    
    return ( 
        <div className="greeting">
            <p>{greet} {children}</p>
        </div>
    );
}

export default Greetings;