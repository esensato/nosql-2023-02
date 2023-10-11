# MongoDB

## Referência

https://cassandra.apache.org/

## Conceitos

- É um banco de dados baseado em colunas

## Instalação

- [Instalação Cassandra](https://cassandra.apache.org/doc/latest/cassandra/getting_started/installing.html)

## Utilizando Docker

[Docker Playground](https://labs.play-with-docker.com/)

## Preparando o Ambiente

- Criar uma imagem baseada no centOS

`docker pull centos`

- Iniciar um `container`

`docker run -it -p 9042:9042 -p 7000:7000 -p 7199:7199 --name cassandra centos`

- Atualizar o repositório do `yum`

```
cd /etc/yum.repos.d/
sed -i 's/mirrorlist/#mirrorlist/g' /etc/yum.repos.d/CentOS-*
sed -i 's|#baseurl=http://mirror.centos.org|baseurl=http://vault.centos.org|g' /etc/yum.repos.d/CentOS-*
dnf update -y
```

- Efetuando o download

`curl -OL https://archive.apache.org/dist/cassandra/4.1.3/apache-cassandra-4.1.3-bin.tar.gz`

- Descompactar o arquivo

`tar xzvf apache-cassandra-4.1.3-bin.tar.gz`

## Instalando as Dependências

`yum install -y python3`

`yum install -y java`

- Diretório `apache-cassandra-4.1.3/bin`
- 
`./cassandra -v`

## Configuração Mínima

- Editar o arquivo `/etc/cassandra/conf/cassandra.yaml`

```yaml
cluster_name: 'Meu_Cluster'
seeds: 192.168.0.13
storage_port: 7000
listen_address: 192.168.0.13
native_transport_port: 9042
``````


```
-ea
-da:net.openhft...
-XX:+UseThreadPriorities
-XX:+HeapDumpOnOutOfMemoryError
-Xss256k
-XX:+AlwaysPreTouch
-XX:-UseBiasedLocking
-XX:+UseTLAB
-XX:+ResizeTLAB
-XX:+UseNUMA
-XX:+PerfDisableSharedMem
-Djava.net.preferIPv4Stack=true
-Xms1G
-Xmx1G
```
## Iniciando o servidor

`cassandra -R`

rpc_address is the address on which Cassandra listens to the client calls.

listen_address is the address on which Cassandra listens to the other Cassandra nodes.
