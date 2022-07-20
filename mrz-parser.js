function parse(a, b) {
    a = fillFillers(a);
    b = fillFillers(b);
    let doc_type = a.slice(0, 2);
    let country = a.slice(2, 5);
    let surname_names = a.slice(5, 44).split('<<', 2);
    if (surname_names.length < 2) {
        surname_names.push('');
    }
    let surname = surname_names[0];
    let names = surname_names[1];
    names = names.replaceAll('<', ' ').trim();
    surname = surname.replaceAll('<', ' ').trim();
    let number = b.slice(0, 9);
    let check_number = b.charAt(9);
    let nationality = b.slice(10, 13);
    let date_of_birth = b.slice(13, 19);
    let check_date_of_birth = b.charAt(19);
    let sex = b.charAt(20);
    let expiration_date = b.slice(21, 27);
    let check_expiration_date = b.charAt(27);
    let personal_number = b.slice(28, 42);
    let check_personal_number = b.charAt(42);
    let check_composite = b.charAt(43);

    let result = {};
    result["surname"] = surname;
    result["names"] = names;
    result["country"] = country;
    result["doc_type"] = doc_type;
    result["number"] = number;
    result["check_number"] = check_number;
    result["date_of_birth"] = date_of_birth;
    result["check_date_of_birth"] = check_date_of_birth;
    result["sex"] = sex;
    result["expiration_date"] = expiration_date;
    result["personal_number"] = personal_number;
    result["check_personal_number"] = check_personal_number;
    result["check_composite"] = check_composite;
    return result;
}

function fillFillers(s) {
    while (s.length < 44) {
        s = s + "<";
    }
    return s;
}