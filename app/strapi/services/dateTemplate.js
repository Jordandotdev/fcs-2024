
export default function DateTemplate(date) {
    if (!(date instanceof Date)) {
      try {
         date = new Date(date);
      } catch (error) {
        console.warn(`Invalid date format: ${date}`);
        return date;
      }
    }
    
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }