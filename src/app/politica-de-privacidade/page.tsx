import React from 'react';

const Page = () => {
  return (
    <div className="max-w-[1200px] mx-auto py-12 px-6 text-white leading-relaxed">
      <h1 className="text-3xl font-bold text-center mb-4">Política de Privacidade – TeamLino</h1>
      <p className="text-center text-gray-300 mb-12 italic">Última revisão 28/02/2026</p>

      <div className="space-y-6">
        <p>A TeamLino respeita a tua privacidade e compromete-se a proteger os teus dados pessoais, de acordo com o Regulamento (UE) 2016/679 – RGPD e legislação portuguesa aplicável.</p>
        <p>Ao utilizar a nossa app, website ou serviços, concordas com a recolha e tratamento dos teus dados pessoais nos termos desta Política de Privacidade.</p>

        <section>
          <h2 className="text-xl font-bold mb-2">1. Responsável pelo Tratamento de Dados</h2>
          <p>Ventos Benfazejos Lda – NUIPC 519 247 060</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2">2. Dados Pessoais Recolhidos</h2>
          <p>Durante a tua interação com a TeamLino, poderemos recolher os seguintes dados:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Dados de identificação: nome, email, contacto telefónico, morada;</li>
            <li>Dados de registo e faturação: NIF, detalhes de pagamento;</li>
            <li>Dados de saúde e condição física: altura, peso, composição corporal, fotos corporais enviadas para avaliação inicial ou acompanhamento;</li>
            <li>Dados de utilização da app: registo de treino, progresso, interações com a equipa;</li>
            <li>Dados de marketing (quando aplicável): preferências de contacto e comunicação.</li>
            <li>Dados de navigation (quando aplicável): endereço IP, localização aproximada, tipo de dispositivo e de browser.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2">3. Finalidade do Tratamento</h2>
          <p>Os teus dados são utilizados exclusivamente para:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Executar o contrato de prestação de serviços (planos de treino e nutrição personalizados);</li>
            <li>Avaliação inicial, acompanhamento e monitorização da evolução;</li>
            <li>Comunicação sobre a prestação do serviço e suporte técnico;</li>
            <li>Envio de informações e novidades sobre serviços da TeamLino, quando consentido;</li>
            <li>Cumprimento de obrigações legais e fiscais, nomeadamente emitir faturas e recibos;</li>
            <li>Processamento de pagamentos (Cofidis, Viva Wallet, Eupago, MBWay, cartão de crédito).</li>
          </ul>
          <p className="mt-4">Analisar o desempenho do site para melhoria contínua (quando aplicável)</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2">4. Fundamento legal</h2>
          <p>Tratamos os dados com base nos seguintes fundamentos legais:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Consentimento do titular dos dados (ex: subscrição de serviço);</li>
            <li>Execução de contrato ou diligências pré-contratuais (ex: marcação de consultas ou compra de produtos)</li>
            <li>Cumprimento de obrigação legal (ex: emissão de faturas conforme legislação fiscal)</li>
            <li>Interesse legítimo (ex: melhorar os serviços, proteger o website contra abusos)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2">5. Consentimento</h2>
          <p>O envio de fotografias corporais para avaliação é obrigatório para a personalização do plano, mas o uso destas fotos para marketing ou divulgação de casos de sucesso exige consentimento expresso do Cliente, que pode ser revogado a qualquer momento.</p>
          <p>O consentimento para marketing pode ser retirado a qualquer momento através do email: info@teamlino.pt.</p>
          <p>As fotografias corporais não são, em qualquer momento, partilhadas com terceiros.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2">6. Armazenamento, Conservação e Segurança dos Dados</h2>
          <p>Todos os dados são armazenados de forma segura e acessíveis apenas à equipa da TeamLino.</p>
          <p>Adotamos medidas técnicas e organizacionais adequadas para proteger os teus dados contra acesso não autorizado, perda ou divulgação indevida.</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Dados de faturação: guardados por 10 anos, conforme obrigação legal</li>
            <li>Dados de contacto e histórico de interações: guardados até 2 anos após a última interação</li>
            <li>Dados usados com base em consentimento: eliminados quando o consentimento for retirado</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2">7. Cookies e Tecnologias Semelhantes</h2>
          <p>Utilizamos cookies para melhorar a tua experiência na app e no website, armazenar preferências e analisar tráfego.</p>
          <p>Alguns cookies são fornecidos por terceiros para publicidade direcionada (geotargeting, segmentação de interesses), incluindo Google AdSense e outros parceiros.</p>
          <p>Podes desativar os cookies no teu browser, mas isso pode limitar funcionalidades do website e da app.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2">8. Ligações a Sites de Terceiros</h2>
          <p>O website e app podem conter links para sites de terceiros.</p>
          <p>Não partilhamos os seus dados pessoais com terceiros sem prévia autorização do Utilizador, exceto nas seguintes situações:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Plataformas de email marketing (ex: MailerLite)</li>
            <li>Serviços de faturação e pagamentos (ex: Cofidis, Viva Wallet, Eupago, MBWay, cartão de crédito).</li>
            <li>Serviços de alojamento web e manutenção técnica</li>
            <li>Contabilidade (para efeitos fiscais)</li>
            <li>Cumprimentos de outras obrigações legais (como notificações judiciais), se aplicável</li>
          </ul>
          <p className="mt-4">Todos os prestadores atuam como subcontratantes, estando obrigados a cumprir o RGPD e assinam documentação em conformidade.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2">9. Direitos do Cliente/Utilizador:</h2>
          <p>Disponibilizamos aos Clientes/ utilizadores os meios necessários para garantir que seus dados pessoais estejam corretos e sempre atualizados.</p>
          <p>O utilizador poderá, de acordo com as disposições legais aplicáveis em matéria de proteção de dados, solicitar o acesso, a retificação, o apagamento ou o bloqueio de seus dados pessoais, bem como opor-se ao seu tratamento, e envidaremos todos os esforços para atender à solicitação, sem custos excessivos e o mais rapidamente possível, a menos que sejamos obrigados por lei a manter os dados em questão.</p>
          <p>O Utilizador deve estar ciente de que pode ser necessário um período razoável de tempo para alterar, excluir ou remover os dados solicitados do Site e/ou de nossos sistemas de backup.</p>
          <p>De acordo com as disposições legais aplicáveis, os utilizadores poderão, a qualquer momento e segundo critérios razoáveis, solicitar informações adicionais sobre as práticas de recolha, armazenamento e processamento de dados, bem como sobre as finalidades para as quais os dados recolhidos se destinam.</p>
          <p>Para exercer estes direitos, contacta: info@teamlino.pt</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2">10. Autoridade de Controlo</h2>
          <p>Para questões ou reclamações sobre o tratamento de dados pessoais, podes contactar a Comissão Nacional de Proteção de Dados (CNPD):</p>
          <p>Website: https://www.cnpd.pt</p>
          <p>Morada: Av. D. Carlos I, 134, 1.º, 1200-651 Lisboa</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2">11. Alterações à Política de Privacidade</h2>
          <p>A TeamLino reserva-se ao direito de alterar esta política a qualquer momento. Recomenda-se que consultes o seu cabeçalho regularmente para verificares a última versão e te manteres atualizado.</p>
        </section>
      </div>
    </div>
  );
};

export default Page;