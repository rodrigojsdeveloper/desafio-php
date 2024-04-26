# Usa a imagem oficial do PHP com Apache
FROM php:8.0-apache

# Instala as extensões necessárias para o Symfony
# Se você precisar de outras extensões, adicione-as aqui
RUN docker-php-ext-install pdo pdo_mysql

# Copia a configuração virtual host do Apache para o container
COPY 000-default.conf /etc/apache2/sites-available/000-default.conf

# Habilita o mod_rewrite para reescrita de URL, muito usado no Symfony
RUN a2enmod rewrite

# Copia os arquivos do projeto para o diretório padrão do Apache
COPY . /var/www/html

# Ajusta as permissões do diretório para garantir que o Apache possa escrever no diretório de cache e logs do Symfony
RUN chown -R www-data:www-data /var/www/html/var

# Expõe a porta 80
EXPOSE 80

CMD ["apache2-foreground"]
