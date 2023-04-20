# IRB = Interactive Ruby
puts '### Hello Ruby! ###'
# puts true.class
# puts false.class

puts 'Qual o seu nome?'
resp = gets.chomp
puts 'E a sua idade?'
idade = gets.chomp.to_i
puts "Olá, #{resp}! Seu nome tem #{resp.length} caracteres"
resp.length.even? ? (puts "#{resp.length} é par, incrível") : (puts "#{resp.length} é ímpar, incrível")
if idade >= 18
  puts 'Podes votar'
else
  puts 'Te vejo ano que vem!'
end

# v = ["Ana", "João", "Pedro"]
# puts v.size
# puts v.sort

username = 'george'
password = '1234'
puts 'Por favor insira o seu nome de utilizador:'
resp1 = gets.chomp
puts 'Por favor insira a sua password:'
resp2 = gets.chomp

if resp1 == username && resp2 == password
  puts 'Olá, vem bindo!'
else
  puts 'Credenciais erradas, por favor tente novamente'
end
