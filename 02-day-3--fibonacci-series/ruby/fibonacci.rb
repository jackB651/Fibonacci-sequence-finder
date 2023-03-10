def fibonacci(num)
  # type your code in here
  a, b = 0, 1
  if num == 0
    return 0
  end
  (2..num).each do |i|
    c = a + b
    a = b
    b = c
  end
  return b
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 0"
  puts "=>", fibonacci(0)

  puts

  puts "Expecting: 1"
  puts "=>", fibonacci(2)

  puts

  puts "Expecting: 55"
  puts "=>", fibonacci(10)

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution
