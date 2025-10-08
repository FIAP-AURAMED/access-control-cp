import { Link, useNavigate } from "react-router-dom"
import type { TipoUsuario } from "../../types/tipoUsu";
import Form from "../../components/Form";
const API_URL = import.meta.env.VITE_API_URL_BASE;
 
 
export default function Cadastro() {
 
    const navigate = useNavigate();
 
    const onSubmit = async (data: TipoUsuario) => {
        try{
            const response = await fetch (`${API_URL}`);
            if (!response.ok) {
                throw new Error('Erro ao buscar usuários existentes');
            }
 
            const usuarios: TipoUsuario[] = await response.json();
 
            const usuarioExistente = usuarios.some(usuario =>
                usuario.nomeUsuario === data.nomeUsuario || usuario.email === data.email
            );
 
            if (usuarioExistente) {
                alert("Nome de usuário ou e-mail já cadastrado");
                return;
            }
 
            const novoUsuarioResponse = await fetch(`${API_URL}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({...data, id: String(usuarios.length +1)}),
            });
 
            if (!novoUsuarioResponse.ok) {
                throw new Error ("Erro ao cadastrar funcionário");
            }
 
            alert("Usuário cadastrado com sucesso")
            navigate("/");
        } catch (error) {
            console.error("Falha no cadastro", error);
            alert("Ocorreu um erro ao tentar cadastrar.");
        }
    }
 
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <Form
            onSubmit={onSubmit}
            legend="Cadastro"
            fields={['nome', 'nomeUsuario', 'email']}
            buttonText="Cadastrar"
            />
 
            <p className="text-sm text-center text-gray-600 mt-8">Já possui conta? <Link to='/' className="font-medium text-pink-600 hover:text-pink-500">Faça Login</Link></p>
        </div>
    )
}