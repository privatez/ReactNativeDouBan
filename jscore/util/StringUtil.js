/**
 * Created by private on 2017/4/5.
 */

export default StringUtil = {

    getDisplayTextDefault(data: Array, column: string, maxLength: number): string {
        return this.getDisplayText(data, column, maxLength, '/', '...');
    },

    getDisplayText(data: Array, column: string, maxLength: number, separator: string, overflow: string): string {
        let str = '';

        if (!data || data.length === 0) {
            return str;
        }

        Array.from(data).forEach((child, index) => {
            if (index != 0) {
                str += separator;
            }

            str += column ? child[column] : child;

            if (maxLength && str.length >= maxLength) {
                str = str.substring(0, maxLength);
                str += overflow;
                return str;
            }
        });

        return str;
    }
}
