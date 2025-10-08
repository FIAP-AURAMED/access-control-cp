import Form from "../../components/Form";
import type { TipoUsuario } from "../../types/tipoUsu";
import { Link, useNavigate } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_URL_BASE;
 
 
export default function Login() {
 
    const navigate = useNavigate();
 
    const onSubmit = async (data: TipoUsuario) => {
        try {
            const response = await fetch(`${API_URL}`);
 
            if (!response.ok) {
                throw new Error('Erro ao buscar usuários');
            }
 
            const usuarios: TipoUsuario[] = await response.json();
 
            const usuario = usuarios.find(
                (usu) => usu.nomeUsuario == data.nomeUsuario && usu.email == data.email
            );

            if (usuario) {
                sessionStorage.setItem('usuarioLogado', JSON.stringify(usuario));
                navigate('/home');
            } else {
                alert('Nome de usuário ou e-mail inválidos');
            }
 
            
        } catch (error) {
            console.error('Falha no login:', error);
            alert('Ocorreu um erro ao tentar fazer login.');
        }
 
 
    };
 
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <Form
                onSubmit={onSubmit}
                legend="Login"
                fields={['nomeUsuario', 'email']}
                buttonText="Entrar"/>
 
            <p className="text-sm text-center text-gray-600 mt-8">Não tem uma conta? <Link to='/cadastro' className="font-medium text-pink-600 hover:text-pink-500">Cadastre-se</Link></p>
        </div>
    )
}