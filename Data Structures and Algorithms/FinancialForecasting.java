import java.util.Scanner;

public class FinancialForecasting {

    public static double futureValue(double currentValue, double growthRate, int years) {
        if (years == 0) {
            return currentValue;
        }

        return futureValue(currentValue * (1 + growthRate / 100), growthRate, years - 1);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter current value: ");
        double currentValue = sc.nextDouble();

        System.out.print("Enter annual growth rate (%): ");
        double growthRate = sc.nextDouble();

        System.out.print("Enter number of years: ");
        int years = sc.nextInt();

        double result = futureValue(currentValue, growthRate, years);

        System.out.printf("Predicted Future Value: %.2f", result);

        sc.close();
    }
}