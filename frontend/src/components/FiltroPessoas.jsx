import { useState } from 'react';
import { api } from '../services/api';

export default function FiltroPessoas({ onBuscar, onLimpar }) {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [loading, setLoading] = useState(false);

  const buscarPessoas = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await api.get('/pessoas', {
        params: {
          ...(nome && { nome }),
          ...(descricao && { descricao })
        }
      });
      
      onBuscar(response.data);
    } catch (error) {
      console.error("Erro na busca:", error);
    } finally {
      setLoading(false);
    }
  };

  const limparFiltros = () => {
    setNome('');
    setDescricao('');
    onLimpar();
  };

  return (
    <form 
      onSubmit={buscarPessoas} 
      className="bg-white p-6 rounded-2xl border border-[#E5E7EB] shadow-sm mb-8 flex flex-col md:flex-row gap-4 items-end"
    >
      <div className="w-full md:w-2/5 text-left">
        <label htmlFor="nome" className="block text-[#13225E] font-semibold text-[14px] mb-2">
          Nome do Mentor
        </label>
        <input
          id="nome"
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Ex: Lucas, Maria..."
          className="w-full border border-[#E5E7EB] rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-[#0162B3] focus:border-transparent transition-all"
        />
      </div>

      <div className="w-full md:w-2/5 text-left">
        <label htmlFor="descricao" className="block text-[#13225E] font-semibold text-[14px] mb-2">
          O que deseja aprender?
        </label>
        <input
          id="descricao"
          type="text"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          placeholder="Ex: programação, inglês, violão..."
          className="w-full border border-[#E5E7EB] rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-[#0162B3] focus:border-transparent transition-all"
        />
      </div>

      <div className="w-full md:w-1/5 flex gap-2">
        <button 
          type="button" 
          onClick={limparFiltros}
          disabled={loading || (!nome && !descricao)}
          className="flex-1 bg-gray-100 text-gray-600 font-bold py-2.5 rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50"
        >
          Limpar
        </button>
        <button 
          type="submit" 
          disabled={loading}
          className="flex-1 bg-[#13225E] text-white font-bold py-2.5 rounded-lg hover:bg-[#0162B3] transition-colors disabled:opacity-70"
        >
          {loading ? '...' : 'Buscar'}
        </button>
      </div>
    </form>
  );
}