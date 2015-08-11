function setIdenticons() {
    hashes = [];
    
        var shaObj = new jsSHA("SHA-512", "TEXT");
        shaObj.setHMACKey("abc", "TEXT");
        shaObj.update("Getting Started");
        var hmac = shaObj.getHMAC("HEX");
        hashes[0] = hmac;
    
        var shaObj = new jsSHA("SHA-512", "TEXT");
        shaObj.setHMACKey("abc", "TEXT");
        shaObj.update("Security Fundamentals");
        var hmac = shaObj.getHMAC("HEX");
        hashes[1] = hmac;
    
        var shaObj = new jsSHA("SHA-512", "TEXT");
        shaObj.setHMACKey("abc", "TEXT");
        shaObj.update("Networking Fundamentals");
        var hmac = shaObj.getHMAC("HEX");
        hashes[2] = hmac;
    
        var shaObj = new jsSHA("SHA-512", "TEXT");
        shaObj.setHMACKey("abc", "TEXT");
        shaObj.update("Chameleon APIs");
        var hmac = shaObj.getHMAC("HEX");
        hashes[3] = hmac;
    
        var shaObj = new jsSHA("SHA-512", "TEXT");
        shaObj.setHMACKey("abc", "TEXT");
        shaObj.update("Docker Fundmamentals");
        var hmac = shaObj.getHMAC("HEX");
        hashes[4] = hmac;
    
        var shaObj = new jsSHA("SHA-512", "TEXT");
        shaObj.setHMACKey("abc", "TEXT");
        shaObj.update("Docker Machine, Compose, and Swarm");
        var hmac = shaObj.getHMAC("HEX");
        hashes[5] = hmac;
    
        var shaObj = new jsSHA("SHA-512", "TEXT");
        shaObj.setHMACKey("abc", "TEXT");
        shaObj.update("DevStack Sandbox");
        var hmac = shaObj.getHMAC("HEX");
        hashes[6] = hmac;
    
        var shaObj = new jsSHA("SHA-512", "TEXT");
        shaObj.setHMACKey("abc", "TEXT");
        shaObj.update("Hadoop Sandbox");
        var hmac = shaObj.getHMAC("HEX");
        hashes[7] = hmac;
    
        var shaObj = new jsSHA("SHA-512", "TEXT");
        shaObj.setHMACKey("abc", "TEXT");
        shaObj.update("Block Trace");
        var hmac = shaObj.getHMAC("HEX");
        hashes[8] = hmac;
    
        var shaObj = new jsSHA("SHA-512", "TEXT");
        shaObj.setHMACKey("abc", "TEXT");
        shaObj.update("Cloud Configuration Managment");
        var hmac = shaObj.getHMAC("HEX");
        hashes[9] = hmac;
    
        var shaObj = new jsSHA("SHA-512", "TEXT");
        shaObj.setHMACKey("abc", "TEXT");
        shaObj.update("Chameleon Architecture");
        var hmac = shaObj.getHMAC("HEX");
        hashes[10] = hmac;
    
        var shaObj = new jsSHA("SHA-512", "TEXT");
        shaObj.setHMACKey("abc", "TEXT");
        shaObj.update("Software Defined Networking");
        var hmac = shaObj.getHMAC("HEX");
        hashes[11] = hmac;
    
        var shaObj = new jsSHA("SHA-512", "TEXT");
        shaObj.setHMACKey("abc", "TEXT");
        shaObj.update("Cloud Storage");
        var hmac = shaObj.getHMAC("HEX");
        hashes[12] = hmac;
    
        var shaObj = new jsSHA("SHA-512", "TEXT");
        shaObj.setHMACKey("abc", "TEXT");
        shaObj.update("OpenMPI");
        var hmac = shaObj.getHMAC("HEX");
        hashes[13] = hmac;
    
        var shaObj = new jsSHA("SHA-512", "TEXT");
        shaObj.setHMACKey("abc", "TEXT");
        shaObj.update("Robot Operating System (ROS)");
        var hmac = shaObj.getHMAC("HEX");
        hashes[14] = hmac;
    
        var shaObj = new jsSHA("SHA-512", "TEXT");
        shaObj.setHMACKey("abc", "TEXT");
        shaObj.update("Machine Learning");
        var hmac = shaObj.getHMAC("HEX");
        hashes[15] = hmac;
    
        var shaObj = new jsSHA("SHA-512", "TEXT");
        shaObj.setHMACKey("abc", "TEXT");
        shaObj.update("OpenStack on Bare Metal");
        var hmac = shaObj.getHMAC("HEX");
        hashes[16] = hmac;
    
        var shaObj = new jsSHA("SHA-512", "TEXT");
        shaObj.setHMACKey("abc", "TEXT");
        shaObj.update("Ceph");
        var hmac = shaObj.getHMAC("HEX");
        hashes[17] = hmac;
    

    // base64 encoded PNG
    for (i = 0; i < hashes.length; i++) {
        data = new Identicon(hashes[i], 300).toString();
        document.getElementById("img-"+i).src="data:image/png;base64," + data;
    }
}

window.onload = setIdenticons;
