import { FormGroup } from "@angular/forms";

export function confirmValid(confirm:string, confirm2:string){

    return (formgroup: FormGroup) => {
        const con = formgroup.controls[confirm];
        const con2 = formgroup.controls[confirm2];
        if(con2.errors && !con2.errors.confirmValid){
            return;
        }
        if(con.value !== con2.value){
            con2.setErrors({ confirmValid: true});
        }else {
            con2.setErrors(null);
        }
    }

}