const convertMonthName = (monthName: string): string => {
    const ukrainianMonths: Record<string, string> = {
        'January': 'січня',
        'February': 'лютого',
        'March': 'березня',
        'April': 'квітня',
        'May': 'травня',
        'June': 'червня',
        'July': 'липня',
        'August': 'серпня',
        'September': 'вересня',
        'October': 'жовтня',
        'November': 'листопада',
        'December': 'грудня'
    };

    return ukrainianMonths[monthName] || 'Невідомий місяць';
};

export default convertMonthName;