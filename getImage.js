function getImage(img){
    switch (img) {
        case '50d':
            return 'img/007-mist.png';
            break;
        case '01d':
            return 'img/001-sun.png';
            break;
        case '02d':
            return 'img/003-cloudy.png';
            break;
        case '03d' :
            return 'img/002-cloud.png';
            break;
        case '09d' :
            return 'img/004-rain.png';
            break;
        case '10d' :
            return 'img/004-rain.png';
            break;
        case '11d' :
            return 'img/005-storm.png';
            break;
        case '13d' :
            return 'img/006-snowflake.png';
            break;
        default:
            return 'img/003-cloudy.png';
            break;
    }
}