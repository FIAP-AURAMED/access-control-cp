
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
        <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset className="w-full md:w-250 max-w-md p-10 space-y-6 bg-white rounded-lg shadow-md">
                <h1 className="text-2xl font-bold text-center text-gray-900">{legend}</h1>
                {fields.includes('nome') && (
                    <div>
                        <label htmlFor="nome" className="block text-sm font-medium text-gray-700">Nome</label>
                        <input type="text" id="nome" placeholder="Digite seu nome" className="block w-full text-sm px-8 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500" {...register('nome', { required: 'O nome é obrigatório' })} />
                        {errors.nome && <small className="mt-2 text-sm text-red-600">{errors.nome.message}</small>}
                    </div>
                )}
 
                {fields.includes('nomeUsuario') && (
                    <div>
                        <label htmlFor="nomeUsuario" className="block text-sm font-medium text-gray-700">Nome de Usuário</label>
                        <input type="text" id="nomeUsuario" placeholder="Digite o nome de usuário" className="block w-full text-sm px-8 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500" {...register('nomeUsuario', { required: 'O nome de usuário é obrigatório' })} />
                        {errors.nomeUsuario && <small className="mt-2 text-sm text-red-600">{errors.nomeUsuario.message}</small>}
                    </div>
                )}
 
                {fields.includes('email') && (
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" id="email" placeholder="Digite seu e-mail" className="block w-full text-sm px-8 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500" {...register('email', { required: 'O nome de usuário é obrigatório' })} />
                        {errors.email && <small className="mt-2 text-sm text-red-600">{errors.email.message}</small>}
                    </div>
                )}
 
                <div>
                    <button type="submit" className="w-full px-4 py-2 text-sm font-medium text-white bg-pink-600 border border-transparent rounded-md shadow-sm hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">{buttonText}</button>
                </div>
            </fieldset>
        </form>
    )
}