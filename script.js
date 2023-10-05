function convertLength() {
    const lengthInMeters = parseFloat(document.getElementById('length').value);
    const selectedUnits = document.getElementById('units').value;
    let convertedLength;
    
    switch (selectedUnits) {
        case 'cm':
            convertedLength = lengthInMeters * 100;
            break;
        case 'km':
            convertedLength = lengthInMeters / 1000;
            break;
        case 'mm':
            convertedLength = lengthInMeters * 1000;
            break;
        default:
            convertedLength = lengthInMeters;
    }
    
    document.getElementById('result').textContent = `Converted Length: ${convertedLength} ${selectedUnits}`;
}
