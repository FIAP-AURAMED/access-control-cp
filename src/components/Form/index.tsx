
import type { TipoUsuario } from "../../types/tipoUsu";
 
interface FormProps {
    onSubmit: (data: TipoUsuario) => void;
    fields: Array<'nome' | 'nomeUsuario' | 'email'>;
    buttonText: string;
    legend: string;
}
 
 
export default function Form() {
 
    return (
        <div></div>
    )
}