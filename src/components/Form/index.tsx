
import { useForm } from "react-hook-form";
import type { TipoUsuario } from "../../types/tipoUsu";
 
interface FormProps {
    onSubmit: (data: TipoUsuario) => void;
    fields: Array<'nome' | 'nomeUsuario' | 'email'>;
    buttonText: string;
    legend: string;
}
 
 
export default function Form({ onSubmit, fields, buttonText, legend }: FormProps) {

    const { register, handleSubmit, formState: { errors } } = useForm<TipoUsuario>();
 
    return (
        <div></div>
    )
}