export function isValidName(username: string): boolean {
    username = username.trimEnd();

    if (!username) {
        return false;
    }

    // Check length
    if (username.length < 3 || username.length > 20) {
        return false;
    }

    // Check allowed characters (alphanumeric, underscore, hyphen)
    const allowedChars = /^[a-zA-Z]+$/;
    if (!allowedChars.test(username)) {
        return false;
    }

    // Check if username starts or ends with special characters
    if (username.startsWith("-") || username.startsWith("_") || username.endsWith("-") || username.endsWith("_")) {
        return false;
    }

    return true;
}

export function isValidEmail(email: string): boolean {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
}

export function isValidPhone(phone: string): boolean {
    // This function performs basic phone number validation for common formats.
    // You might need to adjust it based on specific country formats.
  
    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return phoneRegex.test(phone);
  }

export function splitText(text: string) {
    const separators = /[\s.,;:!?(){}\[\]<>\/\\@#$%^&*_\-+=|~]+/;
    return text.split(separators).filter(Boolean);
}

export function isValidDate(dateString: string) {
    // Check if dateString is in the YYYY-MM-DD format and a valid date
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateString.match(regex)) return false;

    const date = new Date(dateString);
    const timestamp = date.getTime();
    return !isNaN(timestamp) && dateString === date.toISOString().split('T')[0];
}

interface ValidationResult {
    isValid: boolean;
    error: string;
}

export function isValidAddress(address: string): ValidationResult {
    if (!address || typeof address !== 'string' || address.trim().length === 0) {
        return { isValid: false, error: 'Address is empty or not a string' };
    }

    const parts = address.split(/[\s,]+/);

    if (parts.length < 4) {
        return { isValid: false, error: 'Address is too short' };
    }

    const postalCodeRegex = /[A-Za-z0-9]{3,}/;

    const hasStreetNumber = parts.some(part => /\d+/.test(part));
    if (!hasStreetNumber) {
        return { isValid: false, error: 'Address is missing a street number' };
    }

    const hasStreetNameOrCity = parts.some(part => /[A-Za-z]+/.test(part));
    if (!hasStreetNameOrCity) {
        return { isValid: false, error: 'Address is missing a street name or city' };
    }

    const hasPostalCode = parts.some(part => postalCodeRegex.test(part));
    if (!hasPostalCode) {
        return { isValid: false, error: 'Address is missing a postal code' };
    }

    const hasCountry = parts.some(part => /[A-Za-z]{2,}/.test(part));
    if (!hasCountry) {
        return { isValid: false, error: 'Address is missing a country' };
    }

    return { isValid: true, error: '' };
}

export const generateFileName = (file: File): string =>{
    const filename = `${new Date().toISOString().slice(0, 10).replace(/-/g, '')}-${new Date().toISOString().slice(11, 16).replace(/:/g, '')}${
        String.fromCharCode(97 + Math.floor(Math.random() * 26) + (Math.random() > 0.5 ? 0 : -32))
      }.${file.type.split('/').pop()}`;

      return filename
}

export function formatDateTime(dateString: string): string {
    const date = new Date(dateString);

    // Month names array
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    // Get components of the date
    const month = monthNames[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();

    // Format time (HH:MM AM/PM)
    let hours = date.getHours();
    const minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight
    const time = hours + ':' + minutes + ' ' + ampm;

    // Construct formatted date string
    const formattedDateTime = `${month} ${day}, ${year} (${time})`;

    return formattedDateTime;
}

export const isIOS = (): boolean => {
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;

    // Check for iOS devices
    return /iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream;
};

export const formatDateForm = (dateString: string, withTime?: true ) => {
    const date = new Date(dateString);

    const pad = (n: number) => (n < 10 ? `0${n}` : n);

    const month = pad(date.getMonth() + 1);
    const day = pad(date.getDate());
    const year = date.getFullYear();
    let hours = date.getHours();
    const minutes = pad(date.getMinutes());
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    if(withTime) return `${month}/${day}/${year} ${hours}:${minutes} ${ampm}`;
    
    return `${month}/${day}/${year}`;
};