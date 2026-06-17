public class Experiment10 {

    
    abstract class BankAccount {

        int accountNumber;
        String accountHolderName;
        double balance;

        
        BankAccount(int accountNumber, String accountHolderName, double balance) {
            this.accountNumber = accountNumber;
            this.accountHolderName = accountHolderName;
            this.balance = balance;
        }

        
        void deposit(double amount) {
            balance = balance + amount;
            System.out.println("Amount Deposited: " + amount);
        }

      
        void displayDetails() {
            System.out.println("Account Number: " + accountNumber);
            System.out.println("Account Holder Name: " + accountHolderName);
            System.out.println("Balance: " + balance);
        }

   
        abstract void calculateInterest();
    }

    class SavingsAccount extends BankAccount {

        SavingsAccount(int accountNumber, String accountHolderName, double balance) {
            super(accountNumber, accountHolderName, balance);
        }

        void calculateInterest() {
            double interest = balance * 0.05; // 5% interest
            System.out.println("Savings Account Interest: " + interest);
        }
    }

    class CurrentAccount extends BankAccount {

        CurrentAccount(int accountNumber, String accountHolderName, double balance) {
            super(accountNumber, accountHolderName, balance);
        }

        void calculateInterest() {
            double interest = balance * 0.02; // 2% interest
            System.out.println("Current Account Interest: " + interest);
        }
    }


    public static void main(String[] args) {

        Experiment10 obj = new Experiment10();

        SavingsAccount sa = obj.new SavingsAccount(101, "Rahul", 10000);
        CurrentAccount ca = obj.new CurrentAccount(102, "Anita", 20000);

        System.out.println("----- Savings Account -----");
        sa.deposit(2000);
        sa.displayDetails();
        sa.calculateInterest();

        System.out.println();

        System.out.println("----- Current Account -----");
        ca.deposit(3000);
        ca.displayDetails();
        ca.calculateInterest();
    }
}